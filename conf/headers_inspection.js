document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('options');
    const resultDiv = document.getElementById('result');

const largeTexts = {
    option1: `
sample: Host: gasstation.polygon.technology

`,
    option2: `
sample: User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
`,
		option3: `

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
