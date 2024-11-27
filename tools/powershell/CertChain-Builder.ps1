function Show-Menu {
    Clear-Host
    Write-Host "======================== `n"
    Write-Host " SSL CERT CHAIN BUILDER! `n"
    Write-Host "======================== `n"
    Write-Host "Option 1 >> Get SSL BackUp"
    Write-Host "Option 2 >> Get Extracted Key"
    Write-Host "Option 3 >> Get Certificate [.pem format]"
    Write-Host "Option 4 >> Get Decrypted Key"
    Write-Host "Option 5 >> Get SSL PEM blob"
    Write-Host "Option 6 >> Generate Certificate Chain"
    Write-Host "Option 0 >> Exit `n"

    $option = Read-Host "select an option"

    switch ($option) {
        '1' {
            Write-Host "getting backup...`n"
	    $ssl_url = Read-Host "type URL"
	    $ssl_convert = "https://ssl-checker.io/api/v1/check/$ssl_url"
	    $out = "$ssl_url.json"
	    $response = Invoke-RestMethod -Uri $ssl_convert -Method Get
	    $response | ConvertTo-Json | Set-Content -Path $out 
        }
        '2' {
            Write-Host "extracting encrypted private key...`n"
            $pfxFile = Read-Host "paste PFX file path"
	    $extract_priv_key = "& 'C:\Program Files\Git\usr\bin\openssl.exe' pkcs12 -nocerts -in $pfxFile -out extracted_key.key"
	    Invoke-Expression $extract_priv_key
	    Write-Host "encrypted key generated."
        }
        '3' {
            Write-Host "generating certificate in .pem format...`n"
            $pfxFile = Read-Host "paste PFX file path"
	    $extract_cert_pem = "& 'C:\Program Files\Git\usr\bin\openssl.exe' pkcs12 -nokeys -in $pfxFile -out certpem.pem"
	    Invoke-Expression $extract_cert_pem
	    Write-Host "certificate in PEM format generated."
        }
	'4' {
	    Write-Host "decrypting private key...`n"
	    $decrypt_priv_key = "& 'C:\Program Files\Git\usr\bin\openssl.exe' rsa -in extracted_key.key -out decrypt_key.key"
	    Invoke-Expression $decrypt_priv_key
        }
	'5' {
	    Write-Host "extracting SSL PEM blob...`n"

	    $inputFilePath = "C:\Users\machetevault\Documents\certChain_Process\certpem.pem"
	    $outputFilePath = "C:\Users\machetevault\Documents\certChain_Process\PEM_blob.txt"

            $content = Get-Content -Path $inputFilePath -Raw

	    $certificatePattern = "(-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----)"
	    if ($content -match $certificatePattern) {
		$firstCertificate = $matches[0]
  
            Set-Content -Path $outputFilePath -Value $firstCertificate
	    Write-Host "SSL PEM blob extracted and saved to $outputFilePath"
	    } else {
	    Write-Host "no SSL PEM blob section found in the input file."	
	    }			
        }
	'6' {
	    Write-Host "generating certificate chain [Entrust]...`n"

	    $certPEM = "C:\Users\machetevault\Documents\certChain_Process\PEM_blob.txt"
	    $intermediate = "C:\Users\machetevault\Documents\certChain_Process\intermediate\intermediate.crt"
	    $decryptKey= "C:\Users\machetevault\Documents\certChain_Process\decrypt_key.key"

	    $outputFilePath = "C:\Users\machetevault\Documents\certChain_Process\NAME_CC_" + (Get-Date -Format "yyyyMMdd_HHmmss") + ".txt"

	    $c_certPEM = Get-Content -Path $certPEM
	    $c_intermediate = Get-Content -Path $intermediate
	    $c_decryptKey = Get-Content -Path $decryptKey

	    $c_certificatechain = @($c_certPEM + $c_intermediate + $c_decryptKey)

	    Set-Content -Path $outputFilePath -Value $c_certificatechain
	    Write-Host "certificate chain saved to $outputFilePath"
        }
        '0' {
            Write-Host "exiting..."
            break
        }
        Default {
            Write-Host "invalid choice. please select a valid option."
        }
    }

    return $option
}

do {
    $choice = Show-Menu
} while ($choice -ne '0')
