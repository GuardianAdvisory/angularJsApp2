/* Setup blank page controller */
angular.module('MetronicApp').controller('PapController', ['$rootScope', '$scope', 'settings', '$http', function ($rootScope, $scope, settings, $http) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
    $scope.people = [{
        name: 'Adam',
        email: 'adam@email.com',
        age: 12,
        country: 'United States'
    }, {
        name: 'Amalie',
        email: 'amalie@email.com',
        age: 12,
        country: 'Argentina'
    }];

    $scope.TableNames = ["requisitionNoData"
        , "productData"
        , "descriptionData"
        , "amountData"
        , "qtyData"
        , "measuringScaleData"
        , "rateData"
        , "amountFcData"
        , "exchangeRateData"
        , "amountLcData"
        , "customerData"
        , "employeeData"
        , "shareholderData"
        , "beneficiaryDepData"
        , "regionData"
        , "companyData"
        , "businessLineData"
        , "projectData"
    ];
    $scope.tTableNames = ["tinvoiceNoData"
        , "tpurchaseOrderData"
        , "tproductData"
        , "tdescriptionData"
        , "tqtyData"
        , "tmeasuringScaleData"
        , "trateData"
        , "tamountFcData"
        , "texchangeRateData"
        , "tamountExTaxData"
        , "tfederalExciseDutyData"
        , "tgstData"
        , "tadvanceTaxData"
        , "tamountInTaxData"
        , "tcustomerData"
        , "temployeeData"
        , "tshareholderData"
        , "tbeneficiaryDepartmentData"
        , "tregionData"
        , "tcompanyData"
        , "tbusinessLineData"
        , "tprojectData"
       ];
    $scope.pTableNames = [
        { "name": "Invoice", "data": "pinvoiceData" }
        , { "name": "Purchase Order", "data": "ppurchaseOrderData" }
        , { "name": "Product", "data": "pproductData" }
        , { "name": "Description", "data": "pdescriptionData" }
        , { "name": "Rate", "data": "prateData" }
        , { "name": "Gross Amount Discount", "data": "pgrossAmountData" }
        , { "name": "Discount", "data": "pdiscountData" }
        , { "name": "Net Amount(FC)", "data": "pnetAmountFcData" }
        , { "name": "Exchage Rate", "data": "pexchangeRateData" }
        , { "name": "Net Amount(Lc) Excl. Tax", "data": "pnetAmountLcExTaxData" }
        , { "name": "Advance Tax", "data": "padvanceTaxData" }
        , { "name": "Withholding Tax", "data": "pwithHoldingTaxData" }
        , { "name": "Amount Paid(LC)", "data": "pamountPaidLcData" }
        , { "name": "Bank Account No", "data": "pbankAccountNoData" }
        , { "name": "Customer", "data": "pcustomerData" }
        , { "name": "Employee", "data": "pemployeeData" }
        , { "name": "Shareholder", "data": "pshareholderData" }
        , { "name": "Beneficiary Department", "data": "pbeneficiaryDepartmentData" }
        , { "name": "Region", "data": "pregionData" }
        , { "name": "Company", "data": "pcompanyData" }
        , { "name": "Business Line", "data": "pbusinessLineData" }
        , { "name": "Project", "data": "pprojectData" }
    ];
   

}]);
