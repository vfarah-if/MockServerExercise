# **Mock Server (Camouflage) POC**

![image-20221129223950617](./images/comouflage.png)

## Low Level Requirements

1. Must utilise Typescript

2. Must demonstrate the use and benefit after with a pros and cons

3. Must represent some **public API** (define here as working concept) that may be easy to replicate so tests can compare with what has been generated

   2.1. https://petstore3.swagger.io/ is a good example covering a big range of things from an open text point of view

   2.2. https://gorest.co.in/ is a good example of many different API's without swagger that can be sampled for the purpose of trying to manualy setup an endpoint

### Camouflage understanding

1. Everything is documented within https://github.com/testinggospels/camouflage

   ```bash
   npm install -g camouflage-server
   camouflage --version
   ```

2. Initialise a version into a folder

   ```bash
   npx degit camouflagejs/init <folder>
   # or inside folder 
   camouflage init
   ```

3. Here are the full details https://shubhendumadhukar.github.io/camouflage-jsdocs/

### POC

Create a branch https://github.com/vfarah-if/MockServerExercise/tree/feature/camouflage or pull request https://github.com/vfarah-if/MockServerExercise/pull/3 

### Cons

1. Need to install cli and interact using the cli and the cli is a little clunky if you don't config within the directory, doesnt find the endpoints
2. Simple interface, doesnt support typescript or normal programatic usage and seems to have gone off course from the original discontinued MockServoce
3. Seems powerful for simple endpoints but seems over complicated for programmatically enhanceing endpoints with middleware that will be more then a simple canned response
4. The documentation is rubbish, mostly

### Pros

1. Good monitoring if that is somethign that can be useful
2. Easy to put together simple endpoints with basic validation
3. Easy to generate some simple examples in a lot of areas using the CLI but some examples are impossible to get working

# Mocks Server POC

Setup a POC for  https://www.mocks-server.org/ and get an [overview](https://www.mocks-server.org/docs/overview/) of how this all works. Setup the [installation](https://www.mocks-server.org/docs/installation/) and a base typescript project. Follow the [quick start](https://www.mocks-server.org/docs/quick-start/) to get this up and running quickly.

![Mocks Server](./images/mocks-server.png)

## Low level requirements

1. Must utilise **Typescript** - https://www.mocks-server.org/docs/guides/using-babel/
2. Must represent some **public API** (define here as working concept) that may be easy to replicate so tests can compare with what has been generated

   2.1. https://petstore3.swagger.io/ is a good example covering a big range of things from an open text point of view

   2.2. https://gorest.co.in/ is a good example of many different API's without swagger that can be sampled for the purpose of trying to manualy setup an endpoint
3. Must be tested with inputs and outputs and several **variants** of what can happen with that endpoint
4. Must be able to **demonstrate** the use of this to other developers to understand the benefit

### Mocks Server understanding

1. Has a **Cypress Integration** that will make this a doddle to test https://www.mocks-server.org/docs/integrations/cypress/ visually and simply making changes quick and easy

2. Allows configuration of **middleware** to allow logic to be assigned to endpoints https://www.mocks-server.org/docs/usage/variants/middleware/

3. Can configure with **Open API** https://www.mocks-server.org/docs/integrations/openapi/

4. Very easy to setup with **Docker** https://www.mocks-server.org/docs/integrations/docker/

5. Configure **HTTPS** https://www.mocks-server.org/docs/guides/https-protocol/

6. Enable **CORS** with https://www.mocks-server.org/docs/guides/using-the-options-method/

7. Run

   ```bash
   yarn mocks
   #  or 
   yarn start
   ```

### POC

## Alternative solutions

1. Final solution is to use express itself and develop the routes with the simplest way of testing all of this, see code in main using   
2. Alternative using [msw](https://github.com/mswjs/msw)
3. There are many vscode plugins to help mock api's

Create a branch https://github.com/vfarah-if/MockServerExercise/tree/feature/mocks-server or pull request https://github.com/vfarah-if/MockServerExercise/pull/2

## Durability options

Persistence or configuration of data can be done ephemerally using MongoDb in memory using https://github.com/nodkz/mongodb-memory-server with the advantage that no devops resources needs to be setup and seeding of data can be done within some seeding method to make this generic, solving durability in a lightway solution. This is an ephemeral solution, but because we have a seeding mechanism, this can always be reset to determinable state, making API's more useful.
