/**
 * Used by Sync repository CRUD
 */

(function($, undefined) {

    /**
     * Show/hide fields in repository form depending on API type selected
     */
    var setAPIFields = function() {

        var apiType = $('#sync_repository_apitype').val(),
            fields = {"url": true,
                      "username": true,
                      "password": true,
                      "client_id": false,
                      "client_secret": false,
                      "site_key": false,
                      "proxy": true,
                      "accept_push": true,
                      "synchronise_uuids": true,
                      "keep_source": false,
            };
            
        switch(apiType) {
            case "adashi":
                fields.username = false;
                fields.password = false;
                fields.proxy = false;
                fields.accept_push = false;
                fields.keep_source = true;
                break;
            case "ccrm":
                fields.site_key = true;
                break;
            case "filesync":
                fields.username = false;
                fields.password = false;
                fields.proxy = false;
                fields.accept_push = false;
                break;
            case "ftp":
                break;
            case "mcb":
                fields.site_key = true;
                break;
            case "wrike":
                fields.client_id = true;
                fields.client_secret = true;
                fields.site_key = true;
                fields.accept_push = false;
                break;
            default: // Sahana Eden
                break;
        }
        for (var fieldname in fields) {
            if (fields[fieldname]) {
                $('#sync_repository_' + fieldname + '__row').show();
                $('#sync_repository_' + fieldname + '__row1').show();
            } else {
                $('#sync_repository_' + fieldname + '__row').hide();
                $('#sync_repository_' + fieldname + '__row1').hide();
            }
        }
    };
    
    $(document).ready(function() {
        setAPIFields();
        $('#sync_repository_apitype').unbind('.sync').bind('change.sync', function() {
            setAPIFields();
        });
    });
})(jQuery);

// END ========================================================================
