## Requirement Node JS version is: v14.1.0
* You can download it from here: https://nodejs.org/download/release/v14.1.0/
* And add it to "Path" in "Environment Variables"

# How to run Tests

Open ``package.json`` file and find section ``scripts``.
 
You can run any test suite by clicking on ▶ button in normal or debug mode  

#### Available parameters that you can use
*  ``--suite=`` is an optional parameter, is the suite name the from the ``wdio.conf.js``
* ``--target=`` is an optional parameter, by this parameter you can define the environment where tests will run
* ``--headless`` is an optional parameter for running tests in a headless mode (You will not see browser and will not be able to interact with it)

# How to open HTML Reporter when tests were finished
Run ``npx allure open allure/allure-report`` or run ``"openReport"`` script from ``package.json``