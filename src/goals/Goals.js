/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Shopping } from '../shopping';

export function Goals() {
	return <Shopping name="Goals" path="goals" toggle={false} trash={false} />;
}
