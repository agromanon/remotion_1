import type {LogLevel} from '../log-level';
import {Log} from '../logger';
import type {OnBrowserDownload} from '../options/on-browser-download';
import {toMegabytes} from '../to-megabytes';

export const defaultBrowserDownloadProgress =
	(indent: boolean, logLevel: LogLevel): OnBrowserDownload =>
	() => {
		Log.info(
			{indent, logLevel},
			'No local browser could be found. Downloading Chrome Headless Shell https://www.remotion.dev/docs/miscellaneous/chrome-headless-shell',
		);
		return (progress) => {
			let lastProgress = 0;
			if (progress.downloaded > lastProgress + 10_000_000) {
				lastProgress = progress.downloaded;

				Log.info(
					{indent, logLevel},
					`Downloading Chrome Headless Shell - ${toMegabytes(
						progress.downloaded,
					)}/${toMegabytes(progress.totalSize as number)}`,
				);
			}
		};
	};
