app.directive('ng-copyright', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "<span>&copy; 2015 The Hollow Heart</span";

    return directive;
});