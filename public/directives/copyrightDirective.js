app.directive('copyright', function() {
    var directive = {};

    directive.restrict = 'E'; 
    directive.templateUrl = "<span>&copy; The Hollow Heart</span";

    return directive;
});