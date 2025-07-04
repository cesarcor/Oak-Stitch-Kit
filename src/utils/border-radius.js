export function getCornerRadius(borderRadius, corner) {
	const cornerValue = borderRadius?.[corner];
	const globalValue = borderRadius?.global;

	if (cornerValue?.value != null && cornerValue?.unit) {
		return `${cornerValue.value}${cornerValue.unit}`;
	}

	if (globalValue?.value != null && globalValue?.unit) {
		return `${globalValue.value}${globalValue.unit}`;
	}

	return '0px';
}
