({
    reset_global_vars:function() {
      var var_names = JSON.parse(pm.environment.get("all_vars"))
      global_vars = var_names["all_global_vars"]
      for(var i=0; i<global_vars.length; i++){
        (pm.environment.get("debug_flag") && console.log('DEBUG: resetting global var:'+global_vars[i]))
        pm.globals.unset(global_vars[i])
      }
    },
    get_random_string:function() {
      var random_string = pm.variables.replaceIn('{{$randomInt}}_{{$timestamp}}')
      return random_string;
    },
    set_dynamic_url:function() {
      var url_var_name = "Market_Data_URL_" + pm.environment.get("ENV")
      pm.variables.set("dynamic_url", pm.environment.get(url_var_name))
    },
    set_symbol:function() {
      var symbols = ["AAPL", "CE", "CXP", "UNVR", "OKTA", "WFC", "JPM", "BAC", "LVS", "MRNA", "AZN", "BA", "XTNT"]
      pm.variables.set("symbol", _.sample(symbols))
    },
    get_threshold:function() {
      return parseInt(pm.environment.get("Threshold_for_" + pm.environment.get("ENV")))
    },
    print_debug_info:function() {
      console.log("ENV is set to " + pm.environment.get("ENV"))
      console.log("Threshold variable Threshold_for_" + pm.environment.get("ENV") + " is set to " + parseInt(pm.environment.get("Threshold_for_" + pm.environment.get("ENV"))))
      console.log("Stock Ticker is " + pm.variables.get("symbol"))
    }
})
