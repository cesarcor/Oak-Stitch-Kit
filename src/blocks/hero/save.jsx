import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { bgImageUrl } = attributes;
	const blockProps = useBlockProps.save({
		className: 'oask-hero',
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
