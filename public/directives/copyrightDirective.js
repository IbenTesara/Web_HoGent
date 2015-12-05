app.directive('copyright', function() {
    var directive = {};

    directive.restrict = 'E'; 
    directive.templateUrl = "<span>&copy; {{copyright.info}}</span";
    directive.scope={
    	copyright: "info"
    }

    return directive;
});