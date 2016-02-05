'use strict';

// Example Module:
// angular.module('nameOfModule', ['dependency1', 'dependency2', 'dependency3']);
// Dependencies will be automatically loaded for the modules that list them as requirements.

angular.module("stdComponents", []);
angular.module('stdControllers', []);
angular.module("mainApp", ['stdControllers','stdComponents']);



