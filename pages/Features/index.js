import $ from "./style.css";
import Feature from "./Feature";
export default ({ items }) => (
	<div className={$.section}>
		<div className={$.section_title}>Features</div>
		<div className={$.feautures}>
			{items.map((feature, key) => {
				const featureClass = `${$.feature} feature_${key}`;
				return (
					<div className={featureClass} key={key}>
						<Feature
							title={feature.title}
							headline={feature.headline}
						/>
					</div>
				);
			})}
		</div>
	</div>
);
