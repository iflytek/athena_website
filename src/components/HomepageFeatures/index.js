import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        无需关注底层基础设施及服务化相关的开发和运维，可高效、安全、自主可控地对AI引擎进行部署、升级、扩缩、监控和运营
      </>
    ),
  },
  {
    title: 'Focus on AI Algorithm Engineer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        专为A.I.算法工程师打造的无服务、全托管式A.I.引擎平台. 更多详情,参阅<code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Stable and Reliable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        日亿级PV的打磨，云原生架构与SRE双轮驱动，系统可用性99.99%
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
