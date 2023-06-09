import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import * as kplus from 'cdk8s-plus-26';


export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);
    const dbConfig = new kplus.ConfigMap(this, `dev-db-configs`);  
    dbConfig.addData('password', "abcd");

    new kplus.Deployment(this, `dev-deployment`, {
      containers: [{image: 'nginx'}], 
      metadata: {
        namespace: "dev", 
        name: "platform", 
      }
    });
  }
}

const app = new App();
new MyChart(app, 'hello');
app.synth();