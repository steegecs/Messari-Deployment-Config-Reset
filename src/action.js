const core = require('@actions/core')

const ABSOLUTE_PATH = core.getInput('ABSOLUTE_PATH')

const DEPLOYMENT_CONFIGURATIONS_JSON = require(ABSOLUTE_PATH + "/deployment/deployment.json");
const DEPLOYMENT_CONFIGURATIONS = JSON.parse(JSON.stringify(DEPLOYMENT_CONFIGURATIONS_JSON))[
    "subgraphs"
  ];

async function deploySubgraphs(ABSOLUTE_PATH) {
    for (subgraph in DEPLOYMENT_CONFIGURATIONS["subgraphs"]) {
        for (protocol in DEPLOYMENT_CONFIGURATIONS["subgraphs"][subgraph]) {
            for (network in DEPLOYMENT_CONFIGURATIONS["subgraphs"][subgraph][
                protocol
            ]) {
                if (
                "deploy-on-merge" in
                DEPLOYMENT_CONFIGURATIONS["subgraphs"][subgraph][protocol][network]
                ) {
                console.log(
                    protocol +
                    " " +
                    DEPLOYMENT_CONFIGURATIONS["subgraphs"][subgraph][protocol][
                        network
                    ]["deploy-on-merge"]
                );
                DEPLOYMENT_CONFIGURATIONS["subgraphs"][subgraph][protocol][network][
                    "deploy-on-merge"
                ] = false;
                }
            }
        }
    }
    
    fs.writeFile(
        ABSOLUTE_PATH + "/deployment/deployment.json",
        JSON.stringify(DEPLOYMENT_CONFIGURATIONS),
        (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        }
    );
}

deploySubgraphs(ABSOLUTE_PATH);