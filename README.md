# Grafana-backend-datasource

## Autors: 

- ## 	Andrea Calabretta (matricola: 1000008923)

- ## 	Alessandro Mauro (matricola: 1000009156) 


#### This is a backend datasource project for Grafana Plugin made by Andrea Calabretta & Alessandro Mauro.

The aim of the project is to plot temperature data, coming from a **Node.js with TypeScript** server, into a **Grafana Plugin**.

![img](https://github.com/andrea-calabretta/Grafana-backend-datasource/blob/main/img/diagram.jpg)

#### Adopted technologies:

- Typescript: data generation 
- Node+Typescript: server
- json.schema: [ temperature(°C), timestamp ] 



#### How to run the project:

###### Server settings

- First, transcompile the file `timeseries_generator.ts` into javascript by running `tsc timeseries_generator.ts` ;
- Then, generate the dataset by running `node timeseries_generator.js` . You'll find it inside the "models" folder;
- Run the server with `npm run dev`.

###### Grafana Settings

- First, you need a local instance of grafana, so run Grafana local and go to http://localhost:3000 (or the port where Grafana is running);

- Install the plugin to plot Json from [SimpleJson plugin for Grafana | Grafana Labs](https://grafana.com/grafana/plugins/grafana-simple-json-datasource/) and add the datasource by clicking on "Add data source" from the left panel of Grafana;

  ![img](https://github.com/andrea-calabretta/Grafana-backend-datasource/blob/main/img/image-20211026175132848.png)

- Set the plugin port in order to match the server port;

  ![img](https://github.com/andrea-calabretta/Grafana-backend-datasource/blob/main/img/image-20211026175650280.png)

- Have the server running, click "Explore" from the left panel of Grafana and select a "relative time range" from the dropdown list in the right high corner.

  You should be able to see graphs like these.

![img](https://github.com/andrea-calabretta/Grafana-backend-datasource/blob/main/img/image-20211026180206299.png)

​		and with a different time range, that's the view to be shown:

![img](https://github.com/andrea-calabretta/Grafana-backend-datasource/blob/main/img/image-20211026180337867.png)

