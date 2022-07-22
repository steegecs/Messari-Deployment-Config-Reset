const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')


console.log(github.context.payload.push)
const ABSOLUTE_PATH = core.getInput('ABSOLUTE_PATH')

const DEPLOYMENT_CONFIGURATIONS_JSON = require(ABSOLUTE_PATH + "/deployment/deployment.json");
const DEPLOYMENT_CONFIGURATIONS = JSON.parse(JSON.stringify(DEPLOYMENT_CONFIGURATIONS_JSON));

async function deploySubgraphs(ABSOLUTE_PATH) {
    
}

deploySubgraphs(ABSOLUTE_PATH);