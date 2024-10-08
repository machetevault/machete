document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('options');
    const resultDiv = document.getElementById('result');

const largeTexts = {
    option1: `
sample: 
	Host: machetevault.com

Usage: Specifies the domain name of the server and the TCP port number. Required for HTTP/1.1 requests.
Attack Vectors: Host header injection could lead to cache poisoning or request smuggling.
`,
    option2: `
sample: 
	Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8

Usage: Indicates the media types the client can process. Used for content negotiation.
Attack Vectors: Improper handling may lead to content type sniffing vulnerabilities.
`,
		option3: `
sample: 
	Accept-Encoding: gzip, deflate, br

Usage: Lists the content-codings that are acceptable by the client.
Attack Vectors: Can be exploited in certain compression attacks like BREACH.

`,
		option4: `

`,
		option5: `

`,
		option6: `

`,
		option7: `

`,
    option8: `

`,
		option9: `

`,
		option10: `

`,
    option11: `

`,
		option12: `

`,
		option13: `

`,
    option14: `

`,
		option15: `

`,
		option16: `
`,
    option17: `
`,
		option18: `

`,
		option19: `

`,
    option20: `

`,
		option21: `

`,
		option22: `

`,
    option23: `
`,
		option24: `

`,
		option25: `

`,
    option26: `

`,
		option27: `

`,
		option28: `

`,
    option29: `

`,
		option30: `
  
  `,
		option31: `
  
  `,
    option32: `
    
  `,
		option33: `
  
  `,
		option34: `
  
  `,
    option35: `
    
  `,
    option36: `
    
  `,
		option37: `
  
  `,
		option38: `
  
  `,
    option39: `
    
  `,
		option40: `
  
  `,
		option41: `
  `,
    option42: `
  `,
		option43: `
  
  `,
		option44: `
  
  `,
        option45: `
        
    `
    };

dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        resultDiv.textContent = largeTexts[selectedValue] || '';
    });
});
