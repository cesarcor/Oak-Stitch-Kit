import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getCornerRadius } from '../../utils/border-radius';

export default function save({ attributes }) {
	const { bgImageUrl, heightValue, heightUnit, borderRadius } = attributes;
	const blockProps = useBlockProps.save({
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
		<div {...blockProps}>
			<div className='oask-hero__wrapper'>
				{bgImageUrl && (
					<div className='oask-hero__background-wrapper'>
						<img
							src={bgImageUrl}
							alt=''
							className='oak-hero__background'
							loading='lazy'
							aria-hidden='true'
						/>
					</div>
				)}
				<div className='oask-hero__content'>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
