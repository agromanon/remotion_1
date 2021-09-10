import React, {useCallback, useContext} from 'react';
import {CheckerboardContext} from '../state/checkerboard';
import {ControlButton} from './ControlButton';

export const CheckboardToggle: React.FC = () => {
	const {checkerboard, setCheckerboard} = useContext(CheckerboardContext);

	const onClick = useCallback(() => {
		setCheckerboard((c) => {
			return !c;
		});
	}, [setCheckerboard]);

	return (
		<ControlButton
			aria-label="Show transparency as checkerboard"
			onClick={onClick}
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="game-board-alt"
				className="svg-inline--fa fa-game-board-alt fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				style={{width: 16, height: 16}}
			>
				<path
					fill={checkerboard ? 'var(--blue)' : 'white'}
					d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-32 256H256v192H64V256h192V64h192z"
				/>
			</svg>
		</ControlButton>
	);
};
