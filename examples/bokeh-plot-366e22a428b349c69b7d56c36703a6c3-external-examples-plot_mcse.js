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
    
      
      
    
      var element = document.getElementById("bf28495a-4b70-4a7a-b6fd-7e4c263e1b38");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf28495a-4b70-4a7a-b6fd-7e4c263e1b38' but no matching script tag was found.")
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
                    
                  var docs_json = '{"88e88f74-fbe5-47e8-a80c-be4e3feb3cf6":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"38449"},{"id":"38450"},{"id":"38451"},{"id":"38452"},{"id":"38453"},{"id":"38454"},{"id":"38455"},{"id":"38456"}]},"id":"38459","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38493","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38494","type":"PolyAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38536"},"major_label_policy":{"id":"38537"},"ticker":{"id":"38442"}},"id":"38441","type":"LinearAxis"},{"attributes":{},"id":"38533","type":"BasicTickFormatter"},{"attributes":{},"id":"38555","type":"Selection"},{"attributes":{},"id":"38534","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38457","type":"BoxAnnotation"},{"attributes":{},"id":"38556","type":"UnionRenderers"},{"attributes":{},"id":"38536","type":"BasicTickFormatter"},{"attributes":{},"id":"38537","type":"AllLabels"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38533"},"major_label_policy":{"id":"38534"},"ticker":{"id":"38446"}},"id":"38445","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38458","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"38477"}],"center":[{"id":"38480"},{"id":"38484"}],"height":500,"left":[{"id":"38481"}],"output_backend":"webgl","renderers":[{"id":"38521"},{"id":"38523"},{"id":"38524"},{"id":"38525"},{"id":"38528"}],"title":{"id":"38530"},"toolbar":{"id":"38495"},"toolbar_location":null,"width":500,"x_range":{"id":"38469"},"x_scale":{"id":"38473"},"y_range":{"id":"38471"},"y_scale":{"id":"38475"}},"id":"38468","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"38442","type":"BasicTicker"},{"attributes":{},"id":"38437","type":"LinearScale"},{"attributes":{},"id":"38439","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"38509","type":"Span"},{"attributes":{"source":{"id":"38504"}},"id":"38508","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"38510","type":"Span"},{"attributes":{"children":[[{"id":"38432"},0,0],[{"id":"38468"},0,1]]},"id":"38560","type":"GridBox"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38512","type":"Scatter"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"38523","type":"Span"},{"attributes":{"data_source":{"id":"38513"},"glyph":{"id":"38512"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38515"}},"id":"38514","type":"GlyphRenderer"},{"attributes":{},"id":"38539","type":"Selection"},{"attributes":{"text":"tau"},"id":"38516","type":"Title"},{"attributes":{"overlay":{"id":"38458"}},"id":"38453","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38553"},"selection_policy":{"id":"38554"}},"id":"38518","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38511","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38541"},"selection_policy":{"id":"38542"}},"id":"38513","type":"ColumnDataSource"},{"attributes":{},"id":"38540","type":"UnionRenderers"},{"attributes":{"source":{"id":"38513"}},"id":"38515","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38519","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38520","type":"Circle"},{"attributes":{"axis":{"id":"38441"},"ticker":null},"id":"38444","type":"Grid"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"38524","type":"Span"},{"attributes":{"data_source":{"id":"38518"},"glyph":{"id":"38519"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38520"},"view":{"id":"38522"}},"id":"38521","type":"GlyphRenderer"},{"attributes":{},"id":"38454","type":"UndoTool"},{"attributes":{},"id":"38547","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"38518"}},"id":"38522","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38506","type":"Circle"},{"attributes":{},"id":"38548","type":"AllLabels"},{"attributes":{"end":1,"start":-0.05},"id":"38435","type":"DataRange1d"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38526","type":"Scatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38550"},"major_label_policy":{"id":"38551"},"ticker":{"id":"38478"}},"id":"38477","type":"LinearAxis"},{"attributes":{"data_source":{"id":"38527"},"glyph":{"id":"38526"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38529"}},"id":"38528","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"38445"},"dimension":1,"ticker":null},"id":"38448","type":"Grid"},{"attributes":{"end":1,"start":-0.05},"id":"38471","type":"DataRange1d"},{"attributes":{},"id":"38541","type":"Selection"},{"attributes":{},"id":"38433","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38547"},"major_label_policy":{"id":"38548"},"ticker":{"id":"38482"}},"id":"38481","type":"LinearAxis"},{"attributes":{},"id":"38550","type":"BasicTickFormatter"},{"attributes":{},"id":"38473","type":"LinearScale"},{"attributes":{},"id":"38551","type":"AllLabels"},{"attributes":{"text":"mu"},"id":"38530","type":"Title"},{"attributes":{},"id":"38475","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"38459"},{"id":"38495"}],"tools":[{"id":"38449"},{"id":"38450"},{"id":"38451"},{"id":"38452"},{"id":"38453"},{"id":"38454"},{"id":"38455"},{"id":"38456"},{"id":"38485"},{"id":"38486"},{"id":"38487"},{"id":"38488"},{"id":"38489"},{"id":"38490"},{"id":"38491"},{"id":"38492"}]},"id":"38561","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38525","type":"Span"},{"attributes":{"callback":null},"id":"38492","type":"HoverTool"},{"attributes":{},"id":"38469","type":"DataRange1d"},{"attributes":{},"id":"38542","type":"UnionRenderers"},{"attributes":{},"id":"38478","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38555"},"selection_policy":{"id":"38556"}},"id":"38527","type":"ColumnDataSource"},{"attributes":{"source":{"id":"38527"}},"id":"38529","type":"CDSView"},{"attributes":{"axis":{"id":"38477"},"ticker":null},"id":"38480","type":"Grid"},{"attributes":{"children":[{"id":"38562"},{"id":"38560"}]},"id":"38563","type":"Column"},{"attributes":{"overlay":{"id":"38457"}},"id":"38451","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"38561"},"toolbar_location":"above"},"id":"38562","type":"ToolbarBox"},{"attributes":{"axis":{"id":"38481"},"dimension":1,"ticker":null},"id":"38484","type":"Grid"},{"attributes":{},"id":"38482","type":"BasicTicker"},{"attributes":{},"id":"38450","type":"PanTool"},{"attributes":{"below":[{"id":"38441"}],"center":[{"id":"38444"},{"id":"38448"}],"height":500,"left":[{"id":"38445"}],"output_backend":"webgl","renderers":[{"id":"38507"},{"id":"38509"},{"id":"38510"},{"id":"38511"},{"id":"38514"}],"title":{"id":"38516"},"toolbar":{"id":"38459"},"toolbar_location":null,"width":500,"x_range":{"id":"38433"},"x_scale":{"id":"38437"},"y_range":{"id":"38435"},"y_scale":{"id":"38439"}},"id":"38432","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"38504"},"glyph":{"id":"38505"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38506"},"view":{"id":"38508"}},"id":"38507","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"38493"}},"id":"38487","type":"BoxZoomTool"},{"attributes":{},"id":"38486","type":"PanTool"},{"attributes":{},"id":"38449","type":"ResetTool"},{"attributes":{},"id":"38485","type":"ResetTool"},{"attributes":{},"id":"38491","type":"SaveTool"},{"attributes":{},"id":"38488","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"38494"}},"id":"38489","type":"LassoSelectTool"},{"attributes":{},"id":"38455","type":"SaveTool"},{"attributes":{},"id":"38490","type":"UndoTool"},{"attributes":{"callback":null},"id":"38456","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"38485"},{"id":"38486"},{"id":"38487"},{"id":"38488"},{"id":"38489"},{"id":"38490"},{"id":"38491"},{"id":"38492"}]},"id":"38495","type":"Toolbar"},{"attributes":{},"id":"38553","type":"Selection"},{"attributes":{},"id":"38452","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38505","type":"Circle"},{"attributes":{},"id":"38554","type":"UnionRenderers"},{"attributes":{},"id":"38446","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38539"},"selection_policy":{"id":"38540"}},"id":"38504","type":"ColumnDataSource"}],"root_ids":["38563"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"88e88f74-fbe5-47e8-a80c-be4e3feb3cf6","root_ids":["38563"],"roots":{"38563":"bf28495a-4b70-4a7a-b6fd-7e4c263e1b38"}}];
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