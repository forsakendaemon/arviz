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
    
      
      
    
      var element = document.getElementById("2462a2b0-f1b1-41dd-b43d-a61fd73fb297");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2462a2b0-f1b1-41dd-b43d-a61fd73fb297' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9d0eac40-9444-479f-99dd-a3139eee1d39":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18818","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18850","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18866","type":"Circle"},{"attributes":{},"id":"18887","type":"UnionRenderers"},{"attributes":{},"id":"18886","type":"Selection"},{"attributes":{},"id":"18877","type":"AllLabels"},{"attributes":{"data_source":{"id":"18859"},"glyph":{"id":"18860"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18861"},"view":{"id":"18863"}},"id":"18862","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"18895"},{"id":"18893"}]},"id":"18896","type":"Column"},{"attributes":{"data_source":{"id":"18864"},"glyph":{"id":"18865"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18866"},"view":{"id":"18868"}},"id":"18867","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18854"},"glyph":{"id":"18855"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18856"},"view":{"id":"18858"}},"id":"18857","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18869","type":"Span"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18852"},{"id":"18857"}]},"id":"18871","type":"LegendItem"},{"attributes":{"overlay":{"id":"18838"}},"id":"18832","type":"BoxZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18855","type":"Line"},{"attributes":{},"id":"18880","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18839","type":"PolyAnnotation"},{"attributes":{},"id":"18831","type":"PanTool"},{"attributes":{},"id":"18830","type":"ResetTool"},{"attributes":{},"id":"18827","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18838","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"18822"},"ticker":null},"id":"18825","type":"Grid"},{"attributes":{},"id":"18816","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18851","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18865","type":"Circle"},{"attributes":{"source":{"id":"18854"}},"id":"18858","type":"CDSView"},{"attributes":{},"id":"18888","type":"Selection"},{"attributes":{"above":[{"id":"18870"}],"below":[{"id":"18822"}],"center":[{"id":"18825"},{"id":"18829"}],"height":500,"left":[{"id":"18826"}],"output_backend":"webgl","renderers":[{"id":"18852"},{"id":"18857"},{"id":"18862"},{"id":"18867"},{"id":"18869"}],"title":{"id":"18873"},"toolbar":{"id":"18840"},"toolbar_location":null,"width":500,"x_range":{"id":"18814"},"x_scale":{"id":"18818"},"y_range":{"id":"18816"},"y_scale":{"id":"18820"}},"id":"18813","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18860","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"18830"},{"id":"18831"},{"id":"18832"},{"id":"18833"},{"id":"18834"},{"id":"18835"},{"id":"18836"},{"id":"18837"}]},"id":"18840","type":"Toolbar"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18879"},"major_label_policy":{"id":"18880"},"ticker":{"id":"18823"}},"id":"18822","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18886"},"selection_policy":{"id":"18887"}},"id":"18859","type":"ColumnDataSource"},{"attributes":{"text":"b"},"id":"18873","type":"Title"},{"attributes":{},"id":"18823","type":"BasicTicker"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18876"},"major_label_policy":{"id":"18877"},"ticker":{"id":"18827"}},"id":"18826","type":"LinearAxis"},{"attributes":{"callback":null},"id":"18837","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18856","type":"Line"},{"attributes":{"axis":{"id":"18826"},"dimension":1,"ticker":null},"id":"18829","type":"Grid"},{"attributes":{"source":{"id":"18864"}},"id":"18868","type":"CDSView"},{"attributes":{"toolbar":{"id":"18894"},"toolbar_location":"above"},"id":"18895","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"18849"},"glyph":{"id":"18850"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18851"},"view":{"id":"18853"}},"id":"18852","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18888"},"selection_policy":{"id":"18889"}},"id":"18864","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"18871"},{"id":"18872"}],"location":"center_right","orientation":"horizontal"},"id":"18870","type":"Legend"},{"attributes":{},"id":"18885","type":"UnionRenderers"},{"attributes":{},"id":"18836","type":"SaveTool"},{"attributes":{"children":[[{"id":"18813"},0,0]]},"id":"18893","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18882"},"selection_policy":{"id":"18883"}},"id":"18849","type":"ColumnDataSource"},{"attributes":{},"id":"18884","type":"Selection"},{"attributes":{"overlay":{"id":"18839"}},"id":"18834","type":"LassoSelectTool"},{"attributes":{},"id":"18835","type":"UndoTool"},{"attributes":{},"id":"18882","type":"Selection"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18867"},{"id":"18862"}]},"id":"18872","type":"LegendItem"},{"attributes":{},"id":"18879","type":"BasicTickFormatter"},{"attributes":{},"id":"18889","type":"UnionRenderers"},{"attributes":{"source":{"id":"18859"}},"id":"18863","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18884"},"selection_policy":{"id":"18885"}},"id":"18854","type":"ColumnDataSource"},{"attributes":{},"id":"18820","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18861","type":"Line"},{"attributes":{"source":{"id":"18849"}},"id":"18853","type":"CDSView"},{"attributes":{},"id":"18876","type":"BasicTickFormatter"},{"attributes":{},"id":"18833","type":"WheelZoomTool"},{"attributes":{},"id":"18883","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"18840"}],"tools":[{"id":"18830"},{"id":"18831"},{"id":"18832"},{"id":"18833"},{"id":"18834"},{"id":"18835"},{"id":"18836"},{"id":"18837"}]},"id":"18894","type":"ProxyToolbar"},{"attributes":{},"id":"18814","type":"DataRange1d"}],"root_ids":["18896"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"9d0eac40-9444-479f-99dd-a3139eee1d39","root_ids":["18896"],"roots":{"18896":"2462a2b0-f1b1-41dd-b43d-a61fd73fb297"}}];
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