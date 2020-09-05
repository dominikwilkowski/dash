/**
 * A function to load data from the REST api
 */
export async function makeRestCall(path, body = {}) {
	const user = localStorage.getItem('dash-user');
	let data;

	const URL =
		process.env.NODE_ENV === 'production'
			? 'https://dominik-wilkowski.com/dash'
			: 'http://localhost:5556/dash';

	if (user || body.user) {
		const response = await fetch(`${URL}${path}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				user,
				...body,
			}),
		});
		data = await response.json();
	}

	return data;
}
