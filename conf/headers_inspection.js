document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('options');
    const resultDiv = document.getElementById('result');

const largeTexts = {
    option1: `
sample: 
	Host: machetevault.com

Usage: The Host request header specifies the host and port number of the server to which the request is being sent.
If no port is included, the default port for the service requested is implied (e.g., 443 for an HTTPS URL, and 80 for an HTTP URL).
A Host header field must be sent in all HTTP/1.1 request messages. A 400 (Bad Request) status code may be sent to any HTTP/1.1 request 
message that lacks or contains more than one Host header field.

Attack Vectors: Host header injection could lead to cache poisoning or request smuggling.
`,
    option2: `
sample: 
	Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8

Usage: The Accept request HTTP header indicates which content types, expressed as MIME types, the client is able to understand. 
The server uses content negotiation to select one of the proposals and informs the client of the choice with the Content-Type response 
header. Browsers set required values for this header based on the context of the request. For example, a browser uses different values 
in a request when fetching a CSS stylesheet, image, video, or a script.

Attack Vectors: Improper handling may lead to content type sniffing vulnerabilities.
`,
		option3: `
sample: 
	Accept-Encoding: gzip, deflate, br

Usage: The Accept-Encoding request HTTP header indicates the content encoding (usually a compression algorithm) that the client can understand. 
The server uses content negotiation to select one of the proposals and informs the client of that choice with the Content-Encoding response header.

Attack Vectors: Can be exploited in certain compression attacks like BREACH.
`,
		option4: `
sample: 
	Accept-Language: en-US,en;q=0.5

Usage: The Accept-Language request HTTP header indicates the natural language and locale that the client prefers. 
The server uses content negotiation to select one of the proposals and informs the client of the choice with the Content-Language 
response header. Browsers set required values for this header according to their active user interface language. Users can also configure 
additional preferred languages through browser settings.

The Accept-Language header generally lists the same locales as the navigator.languages property, with decreasing q values 
(quality values). 

Attack Vectors: Minimal direct risk, but may be used for fingerprinting users.
`,
		option5: `
sample:
	Access-Control-Allow-Origin: *

Usage: The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting z
code from the given origin.

Attack Vectors: Misconfiguration can lead to CORS vulnerabilities.
`,
		option6: `
sample:
	Cache-Control: no-cache
`,
		option7: `
sample:
	cf-apo-via: origin,host
`,
    option8: `
sample:
	CF-Cache-Status: DYNAMIC
`,
		option9: `
sample:
	CF-Ray: 8cf25e9c0d082227-MIA
`,
		option10: `
sample:
	Connection: keep-alive
`,
    option11: `
sample:
	

`,
		option12: `
  sample:
  	Content-Length: 57
`,
		option13: `
sample:
  	content-security-policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;
   frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';
   style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
`,
    option14: `
sample:
	Content-Security-Policy-Report-Only: script-src 'none'; connect-src 'none'; report-uri https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=j5xV2lxtvipZVAgy5s.xYjPLn3FMt2Bw8cJ1RDrBuPI-1728354323-1.0.1.1-gBE1R.ecQ2K3TirADxzDbsXOU9MQ9iVRaiFropuXzmqmHViFhyzCi9BynybHXR_311UsOR7AjtMO5e.WNEVFbgZqZHOmjLWYLmbuCf5zv.ZywNyXdSrgxvJ1hU8Ay6q6DjtvkD4uUvngwje.Omzg.vKXG_Qb7W8cgLE0hF5EO0g; 
 report-to cf-csp-endpoint
`,
		option15: `
sample:
	Content-Type: application/json; charset=utf-8
`,
		option16: `
sample:
	Cookie: _ga_W7DW3R7679=GS1.1.1728331726.2.0.1728331726.0.0.0; _ga=GA1.1.1721535675.1728328576;
`,
    option17: `
sample:
	cross-origin-opener-policy: same-origin
`,
		option18: `
sample:
	cross-origin-resource-policy: same-origin
`,
		option19: `
sample:
	Date: Tue, 08 Oct 2024 02:25:23 GMT
`,
    option20: `
sample: 
	ETag: W/"fe-HXRZFMMFoUSWc30W70zcP6Qm7LE"
`,
		option21: `
sample:
	expect-ct: max-age=0
`,
		option22: `
sample:
	If-None-Match: W/"1b1-GFzCGQqk9c7puNvL7NxWzMVJAR8"
`,
    option23: `
sample:
	Origin: https://hackerone.com
`,
		option24: `
sample:
	origin-agent-cluster: ?1
`,
		option25: `
sample:
	Referer: https://hackerone.com/
`,
    option26: `
sample:
	Referrer-Policy: strict-origin-when-cross-origin
`,
		option27: `
sample:
	Report-To: {"endpoints":[{"url":"https:\/\/csp-reporting.cloudflare.com\/cdn-cgi\/script_monitor\/report?m=j5xV2lxtvipZVAgy5s.xYjPLn3FMt2Bw8cJ1RDrBuPI-1728354323-1.0.1.1-gBE1R.ecQ2K3TirADxzDbsXOU9MQ9iVRaiFropuXzmqmHViFhyzCi9BynybHXR_311UsOR7AjtMO5e.WNEVFbgZqZHOmjLWYLmbuCf5zv.ZywNyXdSrgxvJ1hU8Ay6q6DjtvkD4uUvngwje.Omzg.vKXG_Qb7W8cgLE0hF5EO0g"}],"group":"cf-csp-endpoint","max_age":86400}
`,
		option28: `
sample:
	Sec-Fetch-Dest: document
`,
    option29: `
sample:
	Sec-Fetch-Mode: navigate
`,
		option30: `
sample:
	Sec-Fetch-Site: none
  `,
		option31: `
sample:
	Sec-Fetch-User: ?1
  `,
    option32: `
sample:
	Server: cloudflare
    
  `,
		option33: `
sample:
	

  
  `,
		option34: `
sample:
	Strict-Transport-Security: max-age=63072000; includeSubDomains
  
  `,
    option35: `
sample:
	Upgrade-Insecure-Requests: 1
    
  `,
    option36: `
sample:
	User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
    
  `,
		option37: `
sample:
	Vary: Accept-Encoding
  
  `,
		option38: `
sample:
	X-Content-Type-Options: nosniff
  
  `,
    option39: `
sample:
	
    
  `,
		option40: `
sample:
	x-dns-prefetch-control: off
  
  `,
		option41: `
sample:
	x-download-options: noopen
  `,
    option42: `
sample:
	X-Frame-Options: SAMEORIGIN
  `,
		option43: `
sample:
	x-permitted-cross-domain-policies: none
  
  `,
		option44: `
  
  `,
        option45: `
sample:
	X-XSS-Protection: 0
        
    `,

		option46: `
  `,
    option47: `
  `,
		option48: `
  
  `,
		option49: `
  
  `,
        option50: `
        
    `

	
    };

dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        resultDiv.textContent = largeTexts[selectedValue] || '';
    });
});
