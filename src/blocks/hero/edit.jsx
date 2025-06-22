import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

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
	const { bgImageUrl, bgImageId, bgImageAlt } = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			bgImageUrl: media.url,
			bgImageId: media.id,
			bgImageAlt: media.alt || '',
		});
	};

	const blockProps = useBlockProps({
		className: 'oask-hero',
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
			<section {...blockProps}>
				<div className='oask-hero__wrapper'>
					{bgImageUrl && (
						<div className='oask-hero__background-wrapper'>
							<img
								src={bgImageUrl}
								alt={bgImageAlt}
								aria-hidden='true'
								className='oask-hero__background-img'
							/>
						</div>
					)}
					<div className='oask-hero__content'>
						<InnerBlocks template={TEMPLATE} templateLock={false} />
					</div>
				</div>
			</section>
		</>
	);
}
