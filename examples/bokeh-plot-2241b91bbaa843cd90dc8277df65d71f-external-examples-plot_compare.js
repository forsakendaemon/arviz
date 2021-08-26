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
    
      
      
    
      var element = document.getElementById("b7ce6e0a-a857-4216-b686-4543710278a9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b7ce6e0a-a857-4216-b686-4543710278a9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"eb54f8e3-b49a-48db-b64f-67fd2a861d88":{"defs":[],"roots":{"references":[{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"16134"},"selection_policy":{"id":"16135"}},"id":"16104","type":"ColumnDataSource"},{"attributes":{},"id":"16130","type":"AllLabels"},{"attributes":{},"id":"16137","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"16119"},"glyph":{"id":"16120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16121"},"view":{"id":"16123"}},"id":"16122","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16105","type":"MultiLine"},{"attributes":{"source":{"id":"16099"}},"id":"16103","type":"CDSView"},{"attributes":{},"id":"16140","type":"Selection"},{"attributes":{},"id":"16126","type":"Title"},{"attributes":{},"id":"16084","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16111","type":"Circle"},{"attributes":{"formatter":{"id":"16127"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"16128"},"ticker":{"id":"16097"}},"id":"16074","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16106","type":"MultiLine"},{"attributes":{},"id":"16071","type":"BasicTicker"},{"attributes":{},"id":"16078","type":"ResetTool"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"16138"},"selection_policy":{"id":"16139"}},"id":"16114","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"16087"}},"id":"16082","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"16109"},"glyph":{"id":"16110"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16111"},"view":{"id":"16113"}},"id":"16112","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"16086","type":"BoxAnnotation"},{"attributes":{},"id":"16134","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16140"},"selection_policy":{"id":"16141"}},"id":"16119","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"16061"},0,0]]},"id":"16145","type":"GridBox"},{"attributes":{"data_source":{"id":"16099"},"glyph":{"id":"16100"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16101"},"view":{"id":"16103"}},"id":"16102","type":"GlyphRenderer"},{"attributes":{"source":{"id":"16119"}},"id":"16123","type":"CDSView"},{"attributes":{"below":[{"id":"16070"}],"center":[{"id":"16073"},{"id":"16077"}],"height":500,"left":[{"id":"16074"}],"output_backend":"webgl","renderers":[{"id":"16102"},{"id":"16107"},{"id":"16112"},{"id":"16117"},{"id":"16122"},{"id":"16124"}],"title":{"id":"16126"},"toolbar":{"id":"16088"},"toolbar_location":null,"width":500,"x_range":{"id":"16062"},"x_scale":{"id":"16066"},"y_range":{"id":"16064"},"y_scale":{"id":"16068"}},"id":"16061","subtype":"Figure","type":"Plot"},{"attributes":{"end":0.5,"start":-1.5},"id":"16064","type":"DataRange1d"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16115","type":"MultiLine"},{"attributes":{"axis_label":"Log","formatter":{"id":"16129"},"major_label_policy":{"id":"16130"},"ticker":{"id":"16071"}},"id":"16070","type":"LinearAxis"},{"attributes":{},"id":"16139","type":"UnionRenderers"},{"attributes":{},"id":"16141","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16110","type":"Circle"},{"attributes":{},"id":"16079","type":"PanTool"},{"attributes":{"source":{"id":"16114"}},"id":"16118","type":"CDSView"},{"attributes":{},"id":"16081","type":"WheelZoomTool"},{"attributes":{},"id":"16062","type":"DataRange1d"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"16097","type":"FixedTicker"},{"attributes":{},"id":"16129","type":"BasicTickFormatter"},{"attributes":{},"id":"16128","type":"AllLabels"},{"attributes":{},"id":"16136","type":"Selection"},{"attributes":{},"id":"16135","type":"UnionRenderers"},{"attributes":{"children":[{"id":"16147"},{"id":"16145"}]},"id":"16148","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"16132"},"selection_policy":{"id":"16133"}},"id":"16099","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"16086"}},"id":"16080","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16101","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16121","type":"Circle"},{"attributes":{},"id":"16133","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"16085","type":"HoverTool"},{"attributes":{"source":{"id":"16104"}},"id":"16108","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16120","type":"Circle"},{"attributes":{"data_source":{"id":"16104"},"glyph":{"id":"16105"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16106"},"view":{"id":"16108"}},"id":"16107","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16100","type":"Scatter"},{"attributes":{},"id":"16138","type":"Selection"},{"attributes":{},"id":"16066","type":"LinearScale"},{"attributes":{"toolbar":{"id":"16146"},"toolbar_location":"above"},"id":"16147","type":"ToolbarBox"},{"attributes":{"source":{"id":"16109"}},"id":"16113","type":"CDSView"},{"attributes":{},"id":"16132","type":"Selection"},{"attributes":{"toolbars":[{"id":"16088"}],"tools":[{"id":"16078"},{"id":"16079"},{"id":"16080"},{"id":"16081"},{"id":"16082"},{"id":"16083"},{"id":"16084"},{"id":"16085"}]},"id":"16146","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"16074"},"dimension":1,"ticker":null},"id":"16077","type":"Grid"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"16124","type":"Span"},{"attributes":{"axis":{"id":"16070"},"ticker":null},"id":"16073","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16136"},"selection_policy":{"id":"16137"}},"id":"16109","type":"ColumnDataSource"},{"attributes":{},"id":"16127","type":"BasicTickFormatter"},{"attributes":{},"id":"16068","type":"LinearScale"},{"attributes":{},"id":"16083","type":"UndoTool"},{"attributes":{"data_source":{"id":"16114"},"glyph":{"id":"16115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16116"},"view":{"id":"16118"}},"id":"16117","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"16087","type":"PolyAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"16078"},{"id":"16079"},{"id":"16080"},{"id":"16081"},{"id":"16082"},{"id":"16083"},{"id":"16084"},{"id":"16085"}]},"id":"16088","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16116","type":"MultiLine"}],"root_ids":["16148"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"eb54f8e3-b49a-48db-b64f-67fd2a861d88","root_ids":["16148"],"roots":{"16148":"b7ce6e0a-a857-4216-b686-4543710278a9"}}];
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