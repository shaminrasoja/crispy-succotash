# Crispy Succotash Automatest test suite

## Pre Requisites
1. Install [Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)
2. Install npm 
3. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
3. Cloned the source repository: https://gitlab.com/sendcloud-public/crispy-succotash 
4. Go to the project directory, and run:
    >`docker-compose up`

The front-end will be available at <http://localhost:8000/>

## UI Test execution

1. Git Clone the Repo with the master branch for the the specified location
    >git clone https://github.com/shaminrasoja/crispy-succotash.git
    
2. cd <PROJECT_HOME> 

3. Install all the dependencies specified in the package.json file via npm by executing below command by being in the folder location specified in below
    > npm install
    
4. Install Cypress via npm

    * cd /your/project/path

    * npm install cypress --save-dev
    
   This will install Cypress locally as a dev dependency for your project.

5. Execute the Cypress Automation Test Suite by executing the below command below
    * Headless
        > npm run test
    * Headed
        > npx cypress open
        
## Results
![alt text](https://github.com/shaminrasoja/crispy-succotash/blob/master/results.png)

## Limitation
Certain essential functionality, such removing added feeds from the UI is not exsiting in this application. Hence, for subsequent runs, it is necessary to perform data deletion in the database.
The test suite doesn't need any pre-configurations for its initial run. 
