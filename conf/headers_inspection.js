document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('options');
    const resultDiv = document.getElementById('result');

const largeTexts = {
    option1: `
sample: 
	Host: machetevault.com

Usage: The Host request header specifies the host and port number of the server to which the request is being sent.
If no port is included, the default port for the service requested is implied (e.g., 443 for an HTTPS URL, and 80 for an 
HTTP URL). A Host header field must be sent in all HTTP/1.1 request messages. A 400 (Bad Request) status code may be sent 
to any HTTP/1.1 request message that lacks or contains more than one Host header field.

Attack Vectors: Host header injection could lead to cache poisoning or request smuggling.
`,
    option2: `
sample: 
	Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8

Usage: The Accept request HTTP header indicates which content types, expressed as MIME types, the client is able to 
understand. The server uses content negotiation to select one of the proposals and informs the client of the choice 
with the Content-Type response header. Browsers set required values for this header based on the context of the request. 
For example, a browser uses different values in a request when fetching a CSS stylesheet, image, video, or a script.

Attack Vectors: Improper handling may lead to content type sniffing vulnerabilities.
`,
		option3: `
sample: 
	Accept-Encoding: gzip, deflate, br

Usage: The Accept-Encoding request HTTP header indicates the content encoding (usually a compression algorithm) that the 
client can understand. The server uses content negotiation to select one of the proposals and informs the client of that 
choice with the Content-Encoding response header.

Attack Vectors: Can be exploited in certain compression attacks like BREACH.
`,
		option4: `
sample: 
	Accept-Language: en-US,en;q=0.5

Usage: The Accept-Language request HTTP header indicates the natural language and locale that the client prefers. 
The server uses content negotiation to select one of the proposals and informs the client of the choice with the 
Content-Language response header. Browsers set required values for this header according to their active user interface 
language. Users can also configure additional preferred languages through browser settings.
The Accept-Language header generally lists the same locales as the navigator.languages property, with decreasing q values 
(quality values). 

Attack Vectors: Minimal direct risk, but may be used for fingerprinting users.
`,
		option5: `
sample:
	Access-Control-Allow-Origin: *

Usage:The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting 
code from the given origin.

Attack Vectors: Misconfiguration can lead to CORS vulnerabilities.
`,
		option6: `
sample:
	Cache-Control: no-cache

Usage: The Cache-Control HTTP header field holds directives (instructions) — in both requests and responses — that control 
caching in browsers and shared caches (e.g. Proxies, CDNs).

Attack Vectors: Incorrect settings may lead to sensitive data leaks.
`,
		option7: `
sample:
	cf-apo-via: origin,host

Usage: Cloudflare-specific header indicating APO (Automatic Platform Optimization) usage.

Attack Vectors: Generally low risk; specific to Cloudflare configurations.
`,
    option8: `
sample:
	CF-Cache-Status: DYNAMIC

Usage: Cloudflare header indicating cache status of a response.

Attack Vectors: Primarily informational; potential misconfigurations could affect caching behavior.
`,
		option9: `
sample:
	CF-Ray: 8cf25e9c0d082227-MIA
 
Usage: Cloudflare-specific ID for tracing requests.

Attack Vectors: Used for diagnostics; no direct risk.
 
`,
		option10: `
sample:
	Connection: keep-alive

Usage: Controls whether the network connection stays open after the current transaction.

Attack Vectors: Connection header manipulation might be used in HTTP request smuggling.
 
`,
    option11: `
sample:
	Content-Disposition:
 
Usage: Suggests a default filename for saving a file.

Attack Vectors: Poor validation could lead to directory traversal attacks.

`,
		option12: `
sample:
  	Content-Length: 57

Usage: Indicates the size of the request or response body in bytes.

Attack Vectors: Can be exploited in HTTP request smuggling attacks.
   
`,
		option13: `
sample:
   content-security-policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;
   frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';
   style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests

Usage: Mitigates XSS and other injection attacks by specifying allowed content sources.

Attack Vectors: Misconfiguration can reduce security effectiveness.
   
`,
    option14: `
sample:
 Content-Security-Policy-Report-Only: script-src 'none'; connect-src 'none'; report-uri 
 https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=j5xV2lxtvipZVAgy5s.xYjPLn3FMt2Bw8cJ1RDrBuPI-1728354323
 -1.0.1.1-gBE1R.ecQ2K3TirADxzDbsXOU9MQ9iVRaiFropuXzmqmHViFhyzCi9BynybHXR_311UsOR7AjtMO5e.WNEVFbgZqZHOmjLWYLmbuCf5zv.ZywNyXdSr
 gxvJ1hU8Ay6q6DjtvkD4uUvngwje.Omzg.vKXG_Qb7W8cgLE0hF5EO0g; report-to cf-csp-endpoint

Usage: Similar to CSP, but only reports violations without enforcing them.

Attack Vectors: Used for testing policies before enforcement.
 
`,
		option15: `
sample:
	Content-Type: application/json; charset=utf-8

Usage: Specifies the media type of the resource or request body.

Attack Vectors: Incorrect handling can lead to MIME type confusion attacks.
 
`,
		option16: `
sample:
	Cookie: _ga_W7DW3R7679=GS1.1.1728331726.2.0.1728331726.0.0.0; _ga=GA1.1.1721535675.1728328576;

Usage: Stores session data on the client.

Attack Vectors: Susceptible to session hijacking or fixation if not secured properly.
 
`,
    option17: `
sample:
	cross-origin-opener-policy: same-origin

Usage: Controls sharing of browsing contexts, protecting against cross-origin threats.

Attack Vectors: Misconfiguration could lead to cross-origin attacks.
 
`,
		option18: `
sample:
	cross-origin-resource-policy: same-origin

Usage: Prevents other origins from accessing resources.

Attack Vectors: Misconfiguration can expose resources to unauthorized access.
 
`,
option19: `
sample:
	client-name: 
 
`,

	
		option20: `
sample:
	Date: Tue, 08 Oct 2024 02:25:23 GMT

Usage: Represents the date and time at which the message was sent.

Attack Vectors: Generally low risk, used for caching and logging.
 
`,
    option21: `
sample: 
	ETag: W/"fe-HXRZFMMFoUSWc30W70zcP6Qm7LE"

Usage: Provides a mechanism for cache validation.

Attack Vectors: Can be used for tracking users across sessions.
 
`,
		option22: `
sample:
	expect-ct: max-age=0

Usage: Instructs browsers to enforce Certificate Transparency.

Attack Vectors: Helps detect misissued certificates but not directly exploitable
 
`,

		option23: `
sample:
	expires: 
 
`,
		option24: `
sample:
	If-None-Match: W/"1b1-GFzCGQqk9c7puNvL7NxWzMVJAR8"

Usage: Makes a request conditional based on ETag values.

Attack Vectors: Potentially used for cache poisoning if not handled correctly
 
`,
    option25: `
sample:
	Origin: https://hackerone.com

Usage: Indicates the origin of the request, used in CORS.

Attack Vectors: Can be spoofed in CORS attacks.
 
`,
		option26: `
sample:
	origin-agent-cluster: ?1

Usage: Controls whether an origin should have its own agent cluster.

Attack Vectors: Misconfiguration can affect resource isolation.
 
`,

	option27: `
sample:
	pragma: 
 
`,
	
		option28: `
sample:
	Referer: https://hackerone.com/

Usage: Indicates the URL of the resource from which the request was initiated.

Attack Vectors: Can leak sensitive information if URLs contain sensitive data.
 
`,
    option29: `
sample:
	Referrer-Policy: strict-origin-when-cross-origin

Usage: Governs what referrer information should be included with requests.

Attack Vectors: Incorrect settings can lead to information leakage
 
`,
		option30: `
sample:
 Report-To: {"endpoints":[{"url":"https:\/\/csp-reporting.cloudflare.com\/cdn-cgi\/script_monitor\/report?m=
 j5xV2lxtvipZVAgy5s.xYjPLn3FMt2Bw8cJ1RDrBuPI-1728354323-1.0.1.1-gBE1R.ecQ2K3TirADxzDbsXOU9MQ9iVRaiFropuXzmqmHViFhyzCi9
 BynybHXR_311UsOR7AjtMO5e.WNEVFbgZqZHOmjLWYLmbuCf5zv.ZywNyXdSrgxvJ1hU8Ay6q6DjtvkD4uUvngwje.Omzg.vKXG_Qb7W8cgLE0hF5EO0g"}],
 "group":"cf-csp-endpoint","max_age":86400}

Usage: Specifies reporting endpoints for various browser policies.

Attack Vectors: Misuse could lead to excessive or misdirected reporting.

`,
		option31: `
sample:
	Sec-Fetch-Dest: document

Usage: Describes the destination of the request (e.g., document, script).

Attack Vectors: Provides context for request origins; low direct risk
 
`,
    option32: `
sample:
	Sec-Fetch-Mode: navigate

Usage: Describes the mode of the request (e.g., cors, no-cors).

Attack Vectors: Helps enforce security policies; low direct risk
 
`,
		option33: `
sample:
	Sec-Fetch-Site: none

Usage: Indicates the relationship between the origin of the request and the target.

Attack Vectors: Used in security checks; generally low risk
 
  `,
		option34: `
sample:
	Sec-Fetch-User: ?1

Usage: Indicates user activation for a navigation request.

Attack Vectors: Provides context for user interactions; low direct risk
 
  `,
    option35: `
sample:
	Server: cloudflare

Usage: Discloses information about the software used by the origin server.

Attack Vectors: Can provide attackers with information useful for targeting.
    
  `,
		option36: `
sample:
	Set-Cookie:
 
Usage: Sends cookies from server to client, used for session management.

Attack Vectors: Vulnerable to session hijacking if not properly secured.
  
  `,
		option37: `
sample:
	Strict-Transport-Security: max-age=63072000; includeSubDomains

Usage: Enforces HTTPS, protecting against man-in-the-middle attacks.

Attack Vectors: Lack of HSTS can lead to downgrade attacks
  
  `,
option38: `
sample:
	surrogate-control:  

 
  `,
	
    option39: `
sample:
	Upgrade-Insecure-Requests: 1

Usage: Informs the server that the client prefers an encrypted and authenticated response.

Attack Vectors: Generally low risk, but ignored by non-compliant servers
    
  `,
    option40: `
sample:
	User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0

Usage: Identifies the client software initiating the request.

Attack Vectors: Can be spoofed for bypassing client-specific restrictions
    
  `,
		option41: `
sample:
	Vary: Accept-Encoding

Usage: Informs caches which headers to consider when serving cached content.

Attack Vectors: Misuse can lead to cache poisoning.
  
  `,
		option42: `
sample:
	X-Content-Type-Options: nosniff

Usage: Prevents MIME type sniffing, protecting against some XSS attacks.

Attack Vectors: Lack of this header can lead to content-type sniffing vulnerabilities.
  
  `,
    option43: `
sample:
	X-CSRF-Token:
 
Usage: Used to prevent Cross-Site Request Forgery (CSRF) attacks.

Attack Vectors: If not implemented correctly, CSRF attacks remain possible.
    
  `,
		option44: `
sample:
	x-dns-prefetch-control: off

Usage: Controls DNS prefetching, which can improve performance.

Attack Vectors: Generally low risk, but can be used for tracking.
  
  `,
		option45: `
sample:
	x-download-options: noopen

Usage: Used to prevent file downloads from being rendered in the browser.

Attack Vectors: Lack of this header can lead to drive-by download attacks.
 
  `,
    option46: `
sample:
	x-frame-options: SAMEORIGIN

Usage: Protects against clickjacking by controlling whether a page can be framed.

Attack Vectors: Lack of this header can lead to clickjacking vulnerabilities.

  `,
		option47: `
sample:
	x-permitted-cross-domain-policies: none

Usage: Controls loading of cross-domain policies, preventing data theft via Flash or PDF files.

Attack Vectors: Improper settings can lead to unauthorized data access.
  
  `,
		option48: `
sample:
	X-Request-ID:
 
Usage: Used for tracking and debugging requests.

Attack Vectors: Generally low risk; mainly for logging.
  
  `,

option49: `
sample:
	x-requested-with:
 

  
  `,
	
		option50: `
sample:
	x-xss-protection: 0

Usage: The HTTP X-XSS-Protection response header was a feature of Internet Explorer, Chrome and Safari that stopped pages 
from loading when they detected reflected cross-site scripting (XSS) attacks. These protections are largely unnecessary in 
modern browsers when sites implement a strong Content-Security-Policy that disables the use of inline 
JavaScript ('unsafe-inline').

Attack Vectors: Modern browsers may ignore this header; insufficient on its own to prevent XSS.
 
  `,
    option51: `

    sample:
	x-server-version:
  `,

	option52: `

 sample:
	x-server-by:
  `,

	option53: `

 sample:
	x-robots-tag:
  `,

	option54: `
  `,
	  
    option111: `

_ga_W7DW3R7679: This is a Google Analytics cookie used for tracking purposes. It helps in distinguishing users and sessions.

_ga: Another Google Analytics cookie, GA1.1 indicates the version and the unique identifier follows. It’s used for tracking 
a user’s session and behavior on the site.

_hjSessionUser_3886274: This cookie is related to Hotjar, a tool for analyzing user behavior on websites. It stores user 
information in JSON format, including a unique user ID and timestamps.

__hstc: This is a HubSpot cookie, which tracks visitors. It contains a domain hash, the initial timestamp, the last timestamp, 
the current timestamp, and the session number.

hubspotutk: Another HubSpot cookie, which tracks a visitor’s identity. It’s passed to HubSpot on form submission and used for 
deduplicating contacts.

_ga_TJ6598HK6W: Similar to the first one, this is another Google Analytics cookie used for tracking.

__hssrc: This cookie is set by HubSpot and is used to determine if the visitor has restarted their browser. If this cookie 
does not exist when HubSpot manages cookies, it is considered a new session.

cf_clearance: This is a Cloudflare cookie used to manage incoming traffic and apply security settings to protect the site 
from malicious activities.

_ga_3FKCJSPL3F: Another instance of a Google Analytics cookie for tracking purposes.

_gid: This is a Google Analytics cookie used to distinguish users and has a shorter lifespan than _ga cookies 
(typically 24 hours).

_ga_K8WN0Y7BTR: Yet another Google Analytics tracking cookie

__hssc: Another HubSpot cookie that keeps track of sessions and page views.

  `,

	
    };

dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        resultDiv.textContent = largeTexts[selectedValue] || '';
    });
});
