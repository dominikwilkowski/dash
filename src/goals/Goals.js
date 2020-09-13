/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Shopping } from '../shopping';

export function Goals() {
	return <Shopping route="goals" toggle={false} trash={false} sort={false} />;
}
