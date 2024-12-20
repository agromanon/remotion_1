import type {BufferIterator} from '../../buffer-iterator';
import type {Options, ParseMediaFields} from '../../options';
import type {
	MatroskaParseResult,
	MatroskaStructure,
	ParseResult,
} from '../../parse-result';
import type {ParserContext} from '../../parser-context';
import {expectChildren} from './segments/parse-children';

const continueAfterMatroskaResult = (
	result: MatroskaParseResult,
	structure: MatroskaStructure,
): ParseResult => {
	if (result.status === 'done') {
		return {
			status: 'done',
		};
	}

	return {
		status: 'incomplete',
		continueParsing: async () => {
			const newResult = await result.continueParsing();
			return continueAfterMatroskaResult(newResult, structure);
		},
		skipTo: null,
	};
};

// Parsing according to https://darkcoding.net/software/reading-mediarecorders-webm-opus-output/
export const parseWebm = async ({
	counter,
	parserContext,
	fields,
}: {
	counter: BufferIterator;
	parserContext: ParserContext;
	fields: Options<ParseMediaFields>;
}): Promise<ParseResult> => {
	const structure = parserContext.parserState.structure.getStructure();
	if (structure.type !== 'matroska') {
		throw new Error('Invalid structure type');
	}

	const results = await expectChildren({
		iterator: counter,
		length: Infinity,
		children: structure.boxes,
		parserContext,
		startOffset: counter.counter.getOffset(),
		fields,
		topLevelStructure: structure,
	});
	return continueAfterMatroskaResult(results, structure);
};
