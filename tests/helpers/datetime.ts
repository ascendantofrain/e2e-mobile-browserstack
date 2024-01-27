async function getLocaleTimeString() {
	return new Date(await driver.getDeviceTime()).toLocaleTimeString();
}

async function isAm() {
	return (await getLocaleTimeString()).indexOf('AM') > -1;
}

async function isPm() {
	return (await getLocaleTimeString()).indexOf('PM') > -1;
}

export { isAm, isPm };
