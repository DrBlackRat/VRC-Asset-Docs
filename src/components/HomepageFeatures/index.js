import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        All my VRChat Assets are designed to be easy to use and understand, 
        even without having to read the Docs, as everything comes with tooltips.
      </>
    ),
  },
  {
    title: 'Helpful Documentation',
    description: (
      <>
        Sometimes tooltips aren't enough to give you all the needed information.
        In cases like that, this Documentation should help you out.
      </>
    ),
  },
  {
    title: 'Here to Help',
    description: (
      <>
        If you still have questions and need support regarding one of my VRChat Assets, 
        feel free to contact me through Discord.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
