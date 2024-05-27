import type {_Object} from '@aws-sdk/client-s3';
import type {AwsRegion} from '../../client';
import {overallProgressKey} from '../../shared/constants';

export const checkIfRenderExists = (
	contents: _Object[],
	renderId: string,
	bucketName: string,
	region: AwsRegion,
) => {
	const initializedExists = Boolean(
		contents.find((c) => {
			return c.Key?.startsWith(overallProgressKey(renderId));
		}),
	);

	if (!initializedExists) {
		// ! Error message is checked in progress handler and will be retried. Make sure to update
		throw new TypeError(
			`No render with ID "${renderId}" found in bucket ${bucketName} and region ${region}`,
		);
	}
};
