(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,u(u({ref:t},s),{},{components:n})):r.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(127)),o={id:"creating-a-lookup-table",title:"Creating a Lookup Table",slug:"/creating-a-lookup-table"},u={unversionedId:"creating-a-lookup-table",id:"creating-a-lookup-table",isDocsHomePage:!1,title:"Creating a Lookup Table",description:"In order to support the big data processing requirements that some organizations have, it may be more practical or efficient for you to compute carbon metrics within your existing processing. To do so, we support the generation of a lookup table that can be utilized as an additional step in your pipeline.",source:"@site/docs/CreatingALookupTable.md",slug:"/creating-a-lookup-table",permalink:"/docs/creating-a-lookup-table",version:"current",sidebar:"tryNowSidebar",previous:{title:"Running the CLI",permalink:"/docs/running-the-cli"},next:{title:"Data Persistence and Caching",permalink:"/docs/data-persistence-and-caching"}},l=[{value:"Example queries to create input CSV file",id:"example-queries-to-create-input-csv-file",children:[{value:"AWS - Athena Query",id:"aws---athena-query",children:[]},{value:"GCP - BigQuery Query",id:"gcp---bigquery-query",children:[]},{value:"Azure - Yarn Script",id:"azure---yarn-script",children:[]}]}],s={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to support the big data processing requirements that some organizations have, it may be more practical or efficient for you to compute carbon metrics within your existing processing. To do so, we support the generation of a lookup table that can be utilized as an additional step in your pipeline."),Object(i.b)("p",null,"The lookup table maps the estimated energy (kilowatt-hours) and carbon emissions (CO2e) to 1 unit of usage, for all the unique combinations of region, service name, usage type and usage unit in the billing data of your cloud provider(s)."),Object(i.b)("p",null,"Once generated, this lookup table (CSV file) can be deployed to your ETL or other data processing pipeline. Then when processing your billing data, you can simply multiply your usage amount by the values in the lookup tables to estimate energy and CO2e. This approach avoids having to use the Cloud Carbon Footprint application code directly, and works regardless of the programming language or environment used in your pipeline."),Object(i.b)("p",null,"To generate this lookup table:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure you have a CSV file inside the ",Object(i.b)("inlineCode",{parentName:"li"},"cli")," package, that contains all the unique region, service name, usage type and usage unit variations in your billing data, along with the vCPUs for that line item, if it exists. You can see an example of this using AWS data ",Object(i.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/cli/src/__tests__/CreateLookupTable/aws_input.test.csv"},"here"),", and ",Object(i.b)("a",{parentName:"li",href:"#example-queries-to-create-input-csv-file"},"below")," for example queries to create this file."),Object(i.b)("li",{parentName:"ol"},"Run the following:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn create-lookup-table <options>\n")),Object(i.b)("p",null,"The options for this command are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'--awsInput <filename> (required. name of input file, e.g. "aws_input.csv")\n--awsOutput <filename> (optional, defaults to "aws_lookup_data.csv")\n--gcpInput <filename> (required. name of input file, e.g. "gcp_input.csv")\n--gcpOutput <filename> (optional, defaults to "gcp_lookup_data.csv")\n--azureInput <filename> (required. name of input file, e.g. "azure_input.csv")\n--azureOutput <filename> (optional, defaults to "azure_lookup_data.csv")\n')),Object(i.b)("p",null,"We would like to thank ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mfulleratlassian"},"@mfulleratlassian")," for contributing this functionality."),Object(i.b)("h2",{id:"example-queries-to-create-input-csv-file"},"Example queries to create input CSV file"),Object(i.b)("h3",{id:"aws---athena-query"},"AWS - Athena Query"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"SELECT \nline_item_product_code as serviceName,\nproduct_region as region,\nline_item_usage_type as usageType,\npricing_unit as usageUnit,\nproduct_vcpu as vCpus\nFROM <your-cost-and-usage-reports-table>\nWHERE line_item_line_item_type IN ('Usage', 'DiscountedUsage', 'SavingsPlanCoveredUsage')\nAND line_item_usage_start_date >= DATE('YYYY-MM-DD')\nAND line_item_usage_start_date <= DATE('YYYY-MM-DD')\nGROUP BY 1, 2, 3, 4, 5\n")),Object(i.b)("h3",{id:"gcp---bigquery-query"},"GCP - BigQuery Query"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"SELECT\nservice.description as serviceName,\nifnull(location.region, location.location) as region,\nsku.description as usageType,\nusage.unit as usageUnit,\nsystem_labels.value AS machineType\nFROM <your-billing-export-table>\nLEFT JOIN\nUNNEST(system_labels) AS system_labels\nON system_labels.key = \"compute.googleapis.com/machine_spec\"\nWHERE cost_type != 'rounding_error'\nAND usage.unit IN ('byte-seconds', 'seconds', 'bytes')\nAND usage_start_time >= TIMESTAMP('YYYY-MM-DD')\nAND usage_end_time <= TIMESTAMP('YYYY-MM-DD')\nGROUP BY serviceName, region, usageType, usageUnit, machineType\n")),Object(i.b)("h3",{id:"azure---yarn-script"},"Azure - Yarn Script"),Object(i.b)("p",null,"Creating an input file for Azure using billing data requires the use of the Consumption Management API rather than a direct query.\nTo assist with this, we have created a script that makes use of your configured ",Object(i.b)("a",{parentName:"p",href:"/docs/azure"},"credentials")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"packages/cli/.env")," file to query and output the needed mappings to a CSV file."),Object(i.b)("p",null,"To use this script, run the following yarn command with the provided parameters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn create-azure-lookup <options>\n")),Object(i.b)("p",null,"The options for this command are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'--startDate <YYYY-MM-DD> (optional, defaults to 30 days prior to endDate)\n--endDate <YYYY-MM-DD> (optional, defaults to current date)\n--output <filename> (optional, defaults to "azure_input.csv")\n')))}c.isMDXComponent=!0}}]);