let audioBitrate: string | null = null;

export const setAudioBitrate = (bitrate: string | null) => {
	audioBitrate = bitrate;
};

export const getAudioBitrate = () => {
	return audioBitrate;
};

let videoBitrate: string | null = null;

export const setVideoBitrate = (bitrate: string | null) => {
	videoBitrate = bitrate;
};

export const getVideoBitrate = () => {
	return videoBitrate;
};

let maxRate: string | null = null;

export const setVideoMaxRate = (bitrate: string | null) => {
	maxRate = bitrate;
};

export const getVideoMaxRate = () => {
	return maxRate;
};

/**
 * encodingBufferSize is not a bitrate, but it is a bitrate-related option and get validated like a bitrate.
 */
let encodingBufferSize: string | null = null;

export const setEncodingBufferSize = (bitrate: string | null) => {
	encodingBufferSize = bitrate;
};

export const getEncodingBufferSize = () => {
	return encodingBufferSize;
};
