(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("112690e5-41d0-4a33-a7a8-027ea5b6e3e5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '112690e5-41d0-4a33-a7a8-027ea5b6e3e5' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d0a4f4bd-46da-4285-b683-0ef70167f379":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19340","type":"Circle"},{"attributes":{},"id":"19399","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19261","type":"Line"},{"attributes":{},"id":"19373","type":"Selection"},{"attributes":{"data_source":{"id":"19279"},"glyph":{"id":"19280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19281"},"view":{"id":"19283"}},"id":"19282","type":"GlyphRenderer"},{"attributes":{},"id":"19406","type":"UnionRenderers"},{"attributes":{"source":{"id":"19279"}},"id":"19283","type":"CDSView"},{"attributes":{},"id":"19368","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"19381"},"selection_policy":{"id":"19382"}},"id":"19279","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19246","type":"Line"},{"attributes":{},"id":"19386","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19260","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"19389"},"selection_policy":{"id":"19390"}},"id":"19299","type":"ColumnDataSource"},{"attributes":{},"id":"19375","type":"Selection"},{"attributes":{},"id":"19383","type":"Selection"},{"attributes":{"formatter":{"id":"19354"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"19355"},"ticker":{"id":"19348"}},"id":"19201","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19241","type":"Line"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"19373"},"selection_policy":{"id":"19374"}},"id":"19259","type":"ColumnDataSource"},{"attributes":{},"id":"19355","type":"AllLabels"},{"attributes":{},"id":"19380","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19265","type":"Circle"},{"attributes":{"overlay":{"id":"19213"}},"id":"19207","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"19289"},"glyph":{"id":"19290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19291"},"view":{"id":"19293"}},"id":"19292","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"19365"},"selection_policy":{"id":"19366"}},"id":"19239","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19225","type":"Line"},{"attributes":{},"id":"19357","type":"AllLabels"},{"attributes":{"children":[{"id":"19412"},{"id":"19410"}]},"id":"19413","type":"Column"},{"attributes":{"data_source":{"id":"19244"},"glyph":{"id":"19245"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19246"},"view":{"id":"19248"}},"id":"19247","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19339"},"glyph":{"id":"19340"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19341"},"view":{"id":"19343"}},"id":"19342","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19301","type":"Line"},{"attributes":{},"id":"19378","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19255","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19300","type":"Line"},{"attributes":{"data_source":{"id":"19299"},"glyph":{"id":"19300"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19301"},"view":{"id":"19303"}},"id":"19302","type":"GlyphRenderer"},{"attributes":{},"id":"19400","type":"UnionRenderers"},{"attributes":{},"id":"19384","type":"UnionRenderers"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"19287"},{"id":"19292"},{"id":"19297"},{"id":"19302"},{"id":"19307"},{"id":"19312"},{"id":"19317"},{"id":"19322"},{"id":"19327"},{"id":"19332"},{"id":"19337"},{"id":"19342"}]},"id":"19352","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19251","type":"Circle"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"}]},"id":"19351","type":"LegendItem"},{"attributes":{},"id":"19381","type":"Selection"},{"attributes":{"data_source":{"id":"19264"},"glyph":{"id":"19265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19266"},"view":{"id":"19268"}},"id":"19267","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19294"}},"id":"19298","type":"CDSView"},{"attributes":{},"id":"19376","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19259"},"glyph":{"id":"19260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19261"},"view":{"id":"19263"}},"id":"19262","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"19359"},"selection_policy":{"id":"19360"}},"id":"19224","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19230","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19275","type":"Line"},{"attributes":{"data_source":{"id":"19274"},"glyph":{"id":"19275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19276"},"view":{"id":"19278"}},"id":"19277","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"19395"},"selection_policy":{"id":"19396"}},"id":"19314","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19235","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"19387"},"selection_policy":{"id":"19388"}},"id":"19294","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19335","type":"Line"},{"attributes":{"data_source":{"id":"19314"},"glyph":{"id":"19315"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19316"},"view":{"id":"19318"}},"id":"19317","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19229"}},"id":"19233","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19341","type":"Circle"},{"attributes":{},"id":"19208","type":"WheelZoomTool"},{"attributes":{},"id":"19210","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19250","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19276","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19305","type":"Line"},{"attributes":{"data_source":{"id":"19249"},"glyph":{"id":"19250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19251"},"view":{"id":"19253"}},"id":"19252","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"19205"},{"id":"19206"},{"id":"19207"},{"id":"19208"},{"id":"19209"},{"id":"19210"},{"id":"19211"},{"id":"19212"}]},"id":"19215","type":"Toolbar"},{"attributes":{"source":{"id":"19234"}},"id":"19238","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19214","type":"PolyAnnotation"},{"attributes":{"source":{"id":"19269"}},"id":"19273","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19270","type":"Line"},{"attributes":{},"id":"19379","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19236","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19291","type":"Line"},{"attributes":{"source":{"id":"19289"}},"id":"19293","type":"CDSView"},{"attributes":{},"id":"19388","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19245","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19226","type":"Line"},{"attributes":{"data_source":{"id":"19239"},"glyph":{"id":"19240"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19241"},"view":{"id":"19243"}},"id":"19242","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19285","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19286","type":"Line"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"19401"},"selection_policy":{"id":"19402"}},"id":"19329","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"19405"},"selection_policy":{"id":"19406"}},"id":"19339","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19256","type":"Line"},{"attributes":{"source":{"id":"19339"}},"id":"19343","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"19351"},{"id":"19352"}],"location":"top_left"},"id":"19350","type":"Legend"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"19361"},"selection_policy":{"id":"19362"}},"id":"19229","type":"ColumnDataSource"},{"attributes":{},"id":"19211","type":"SaveTool"},{"attributes":{"source":{"id":"19264"}},"id":"19268","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19266","type":"Circle"},{"attributes":{},"id":"19198","type":"BasicTicker"},{"attributes":{"axis":{"id":"19201"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"19204","type":"Grid"},{"attributes":{"source":{"id":"19224"}},"id":"19228","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19377"},"selection_policy":{"id":"19378"}},"id":"19269","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"19215"}],"tools":[{"id":"19205"},{"id":"19206"},{"id":"19207"},{"id":"19208"},{"id":"19209"},{"id":"19210"},{"id":"19211"},{"id":"19212"}]},"id":"19411","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19280","type":"Circle"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"19391"},"selection_policy":{"id":"19392"}},"id":"19304","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"19214"}},"id":"19209","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"19356"},"major_label_policy":{"id":"19357"},"ticker":{"id":"19198"}},"id":"19197","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19336","type":"Line"},{"attributes":{"data_source":{"id":"19254"},"glyph":{"id":"19255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19256"},"view":{"id":"19258"}},"id":"19257","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19294"},"glyph":{"id":"19295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19296"},"view":{"id":"19298"}},"id":"19297","type":"GlyphRenderer"},{"attributes":{},"id":"19193","type":"LinearScale"},{"attributes":{"data":{},"selected":{"id":"19369"},"selection_policy":{"id":"19370"}},"id":"19249","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19254"}},"id":"19258","type":"CDSView"},{"attributes":{"axis":{"id":"19197"},"ticker":null},"id":"19200","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19231","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19271","type":"Line"},{"attributes":{"data_source":{"id":"19304"},"glyph":{"id":"19305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19306"},"view":{"id":"19308"}},"id":"19307","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"19367"},"selection_policy":{"id":"19368"}},"id":"19244","type":"ColumnDataSource"},{"attributes":{},"id":"19354","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"19212","type":"HoverTool"},{"attributes":{"source":{"id":"19284"}},"id":"19288","type":"CDSView"},{"attributes":{},"id":"19397","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19295","type":"Circle"},{"attributes":{"source":{"id":"19334"}},"id":"19338","type":"CDSView"},{"attributes":{"data_source":{"id":"19229"},"glyph":{"id":"19230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19231"},"view":{"id":"19233"}},"id":"19232","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19290","type":"Line"},{"attributes":{"source":{"id":"19299"}},"id":"19303","type":"CDSView"},{"attributes":{"data_source":{"id":"19224"},"glyph":{"id":"19225"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19226"},"view":{"id":"19228"}},"id":"19227","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19284"},"glyph":{"id":"19285"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19286"},"view":{"id":"19288"}},"id":"19287","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19239"}},"id":"19243","type":"CDSView"},{"attributes":{"source":{"id":"19259"}},"id":"19263","type":"CDSView"},{"attributes":{},"id":"19389","type":"Selection"},{"attributes":{},"id":"19398","type":"UnionRenderers"},{"attributes":{},"id":"19205","type":"ResetTool"},{"attributes":{"data":{},"selected":{"id":"19363"},"selection_policy":{"id":"19364"}},"id":"19234","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"19383"},"selection_policy":{"id":"19384"}},"id":"19284","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"19385"},"selection_policy":{"id":"19386"}},"id":"19289","type":"ColumnDataSource"},{"attributes":{},"id":"19385","type":"Selection"},{"attributes":{"data_source":{"id":"19269"},"glyph":{"id":"19270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19271"},"view":{"id":"19273"}},"id":"19272","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19281","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19240","type":"Line"},{"attributes":{},"id":"19206","type":"PanTool"},{"attributes":{},"id":"19405","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19213","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"19234"},"glyph":{"id":"19235"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19236"},"view":{"id":"19238"}},"id":"19237","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19244"}},"id":"19248","type":"CDSView"},{"attributes":{},"id":"19374","type":"UnionRenderers"},{"attributes":{},"id":"19387","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"19344","type":"Title"},{"attributes":{"source":{"id":"19249"}},"id":"19253","type":"CDSView"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19379"},"selection_policy":{"id":"19380"}},"id":"19274","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"19375"},"selection_policy":{"id":"19376"}},"id":"19264","type":"ColumnDataSource"},{"attributes":{},"id":"19356","type":"BasicTickFormatter"},{"attributes":{},"id":"19195","type":"LinearScale"},{"attributes":{"source":{"id":"19274"}},"id":"19278","type":"CDSView"},{"attributes":{},"id":"19377","type":"Selection"},{"attributes":{"children":[[{"id":"19188"},0,0]]},"id":"19410","type":"GridBox"},{"attributes":{},"id":"19382","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19321","type":"Line"},{"attributes":{"source":{"id":"19324"}},"id":"19328","type":"CDSView"},{"attributes":{"ticks":[1.275]},"id":"19348","type":"FixedTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19331","type":"Line"},{"attributes":{"data":{},"selected":{"id":"19393"},"selection_policy":{"id":"19394"}},"id":"19309","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"19350"}],"below":[{"id":"19197"}],"center":[{"id":"19200"},{"id":"19204"}],"height":348,"left":[{"id":"19201"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"},{"id":"19287"},{"id":"19292"},{"id":"19297"},{"id":"19302"},{"id":"19307"},{"id":"19312"},{"id":"19317"},{"id":"19322"},{"id":"19327"},{"id":"19332"},{"id":"19337"},{"id":"19342"}],"title":{"id":"19344"},"toolbar":{"id":"19215"},"toolbar_location":null,"width":450,"x_range":{"id":"19346"},"x_scale":{"id":"19193"},"y_range":{"id":"19347"},"y_scale":{"id":"19195"}},"id":"19188","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19306","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19316","type":"Line"},{"attributes":{},"id":"19360","type":"UnionRenderers"},{"attributes":{"source":{"id":"19309"}},"id":"19313","type":"CDSView"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"19371"},"selection_policy":{"id":"19372"}},"id":"19254","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19320","type":"Line"},{"attributes":{},"id":"19394","type":"UnionRenderers"},{"attributes":{},"id":"19363","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19325","type":"Circle"},{"attributes":{},"id":"19371","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19399"},"selection_policy":{"id":"19400"}},"id":"19324","type":"ColumnDataSource"},{"attributes":{},"id":"19362","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"19346","type":"DataRange1d"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19330","type":"Line"},{"attributes":{},"id":"19395","type":"Selection"},{"attributes":{},"id":"19403","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"19347","type":"DataRange1d"},{"attributes":{"data_source":{"id":"19319"},"glyph":{"id":"19320"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19321"},"view":{"id":"19323"}},"id":"19322","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19329"},"glyph":{"id":"19330"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19331"},"view":{"id":"19333"}},"id":"19332","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19324"},"glyph":{"id":"19325"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19326"},"view":{"id":"19328"}},"id":"19327","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19310","type":"Circle"},{"attributes":{"source":{"id":"19329"}},"id":"19333","type":"CDSView"},{"attributes":{},"id":"19404","type":"UnionRenderers"},{"attributes":{},"id":"19364","type":"UnionRenderers"},{"attributes":{},"id":"19370","type":"UnionRenderers"},{"attributes":{"source":{"id":"19319"}},"id":"19323","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19311","type":"Circle"},{"attributes":{},"id":"19390","type":"UnionRenderers"},{"attributes":{"source":{"id":"19304"}},"id":"19308","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19326","type":"Circle"},{"attributes":{},"id":"19391","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19296","type":"Circle"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"19403"},"selection_policy":{"id":"19404"}},"id":"19334","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19309"},"glyph":{"id":"19310"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19311"},"view":{"id":"19313"}},"id":"19312","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19315","type":"Line"},{"attributes":{},"id":"19359","type":"Selection"},{"attributes":{},"id":"19366","type":"UnionRenderers"},{"attributes":{},"id":"19365","type":"Selection"},{"attributes":{},"id":"19396","type":"UnionRenderers"},{"attributes":{},"id":"19393","type":"Selection"},{"attributes":{},"id":"19402","type":"UnionRenderers"},{"attributes":{},"id":"19401","type":"Selection"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"19397"},"selection_policy":{"id":"19398"}},"id":"19319","type":"ColumnDataSource"},{"attributes":{},"id":"19367","type":"Selection"},{"attributes":{"source":{"id":"19314"}},"id":"19318","type":"CDSView"},{"attributes":{},"id":"19361","type":"Selection"},{"attributes":{},"id":"19372","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19334"},"glyph":{"id":"19335"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19336"},"view":{"id":"19338"}},"id":"19337","type":"GlyphRenderer"},{"attributes":{},"id":"19392","type":"UnionRenderers"},{"attributes":{},"id":"19369","type":"Selection"},{"attributes":{"toolbar":{"id":"19411"},"toolbar_location":"above"},"id":"19412","type":"ToolbarBox"}],"root_ids":["19413"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"d0a4f4bd-46da-4285-b683-0ef70167f379","root_ids":["19413"],"roots":{"19413":"112690e5-41d0-4a33-a7a8-027ea5b6e3e5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();