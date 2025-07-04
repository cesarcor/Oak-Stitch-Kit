import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { getCornerRadius } from '../../utils/border-radius';

const TEMPLATE = [
	[
		'core/heading',
		{
			content: __('Oak & Stitch', 'oak-stitch-kit'),
			textColor: 'tertiary',
			level: 1,
		},
	],
	[
		'core/paragraph',
		{
			content: __('Write something…', 'oak-stitch-kit'),
			textColor: 'tertiary',
		},
	],
	[
		'core/button',
		{
			text: __('Learn More', 'oak-stitch-kit'),
			backgroundColor: 'primary',
			textColor: 'dark',
		},
	],
];

export default function Edit({ attributes, setAttributes }) {
	const DEFAULT_IMAGE =
		'/wp-content/plugins/oak-stitch-kit/assets/images/default_hero.webp';

	const {
		bgImageUrl,
		bgImageId,
		bgImageAlt,
		heightValue,
		heightUnit,
		borderRadius,
	} = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			bgImageUrl: media.url,
			bgImageId: media.id,
			bgImageAlt: media.alt || '',
		});
	};

	const imageUrl = bgImageUrl || DEFAULT_IMAGE;

	const blockProps = useBlockProps({
		className: 'oask-hero',
		style: {
			height: `${heightValue}${heightUnit}`,
			borderTopLeftRadius: getCornerRadius(borderRadius, 'topLeft'),
			borderTopRightRadius: getCornerRadius(borderRadius, 'topRight'),
			borderBottomLeftRadius: getCornerRadius(borderRadius, 'bottomLeft'),
			borderBottomRightRadius: getCornerRadius(borderRadius, 'bottomRight'),
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Background Image', 'oak-stitch-kit')}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={bgImageId}
							render={({ open }) => (
								<Button
									variant={bgImageUrl ? 'secondary' : 'primary'}
									onClick={open}
								>
									{bgImageUrl
										? __('Replace Image', 'oak-stitch-kit')
										: __('Select Image', 'oak-stitch-kit')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{bgImageUrl && (
						<div>
							<Button
								isDestructive
								variant='link'
								onClick={() =>
									setAttributes({ bgImageUrl: '', bgImageId: null })
								}
							>
								{__('Remove Image', 'oak-stitch-kit')}
							</Button>
						</div>
					)}
				</PanelBody>
			</InspectorControls>

			<InspectorControls group='styles'>
				<PanelBody title={__('Height', 'oak-stitch-kit')}>
					<UnitControl
						label={__('Height', 'oak-stitch-kit')}
						value={`${heightValue}${heightUnit}`}
						units={[
							{ value: 'vh', label: 'vh', default: 50 },
							{ value: 'px', label: 'px', default: 400 },
							{ value: '%', label: '%', default: 80 },
							{ value: 'em', label: 'em', default: 20 },
						]}
						onChange={(newHeight) => {
							const matches = newHeight.match(/(\d+)(px|vh|em|%)/);
							if (matches) {
								const [, value, unit] = matches;
								setAttributes({
									heightValue: parseInt(value, 10),
									heightUnit: unit,
								});
							}
						}}
					/>
				</PanelBody>
				<PanelBody
					title={__('Border Radius', 'oak-stitch-kit')}
					initialOpen={false}
				>
					<UnitControl
						label={__('Global Radius', 'oak-stitch-kit')}
						value={`${borderRadius.global?.value || 0}${borderRadius.global?.unit || 'px'}`}
						units={[
							{ value: 'px', label: 'px' },
							{ value: '%', label: '%' },
							{ value: 'em', label: 'em' },
						]}
						onChange={(newValue) => {
							const [_, value, unit] = newValue.match(/^(\d+)(px|%|em)$/) || [];
							if (value && unit) {
								const global = { value: parseInt(value), unit };
								setAttributes({ borderRadius: { ...borderRadius, global } });
							}
						}}
					/>

					<UnitControl
						label={__('Top Left Radius', 'oak-stitch-kit')}
						value={`${borderRadius.topLeft.value}${borderRadius.topLeft.unit}`}
						units={[
							{ value: 'px', label: 'px', default: 0 },
							{ value: 'em', label: 'em', default: 0 },
							{ value: '%', label: '%', default: 0 },
						]}
						onChange={(newValue) => {
							const matches = newValue.match(/(\d+)(px|em|%)/);
							if (matches) {
								const [, value, unit] = matches;
								setAttributes({
									borderRadius: {
										...borderRadius,
										topLeft: { value: parseInt(value, 10), unit },
									},
								});
							}
						}}
					/>
					<UnitControl
						label={__('Top Right Radius', 'oak-stitch-kit')}
						value={`${borderRadius.topRight.value}${borderRadius.topRight.unit}`}
						units={[
							{ value: 'px', label: 'px', default: 0 },
							{ value: 'em', label: 'em', default: 0 },
							{ value: '%', label: '%', default: 0 },
						]}
						onChange={(newValue) => {
							const matches = newValue.match(/(\d+)(px|em|%)/);
							if (matches) {
								const [, value, unit] = matches;
								setAttributes({
									borderRadius: {
										...borderRadius,
										topRight: { value: parseInt(value, 10), unit },
									},
								});
							}
						}}
					/>
					<UnitControl
						label={__('Bottom Left Radius', 'oak-stitch-kit')}
						value={`${borderRadius.bottomLeft.value}${borderRadius.bottomLeft.unit}`}
						units={[
							{ value: 'px', label: 'px', default: 0 },
							{ value: 'em', label: 'em', default: 0 },
							{ value: '%', label: '%', default: 0 },
						]}
						onChange={(newValue) => {
							const matches = newValue.match(/(\d+)(px|em|%)/);
							if (matches) {
								const [, value, unit] = matches;
								setAttributes({
									borderRadius: {
										...borderRadius,
										bottomLeft: { value: parseInt(value, 10), unit },
									},
								});
							}
						}}
					/>
					<UnitControl
						label={__('Bottom Right Radius', 'oak-stitch-kit')}
						value={`${borderRadius.bottomRight.value}${borderRadius.bottomRight.unit}`}
						units={[
							{ value: 'px', label: 'px', default: 0 },
							{ value: 'em', label: 'em', default: 0 },
							{ value: '%', label: '%', default: 0 },
						]}
						onChange={(newValue) => {
							const matches = newValue.match(/(\d+)(px|em|%)/);
							if (matches) {
								const [, value, unit] = matches;
								setAttributes({
									borderRadius: {
										...borderRadius,
										bottomRight: { value: parseInt(value, 10), unit },
									},
								});
							}
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className='oask-hero__wrapper'>
					{bgImageUrl && (
						<div className='oask-hero__background-wrapper'>
							<img
								src={imageUrl}
								alt={bgImageAlt ? bgImageAlt : 'Oak & Stitch Hero'}
								aria-hidden='true'
								className='oask-hero__background-img'
							/>
						</div>
					)}
					<div className='oask-hero__content'>
						<InnerBlocks template={TEMPLATE} templateLock={false} />
					</div>
				</div>
			</div>
		</>
	);
}
