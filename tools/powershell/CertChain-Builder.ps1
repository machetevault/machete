function Show-Menu {
    Clear-Host
    Write-Host "CERT CHAIN - BUILDER! `n"
    Write-Host "Option 1 >> Get Extracted Key"
    Write-Host "Option 2 >> Get Certificate (.pem)"
    Write-Host "Option 3 >> Decrypt Priv Key"
    Write-Host "Option 0 >> Exit `n"

    $option = Read-Host "Select an option"

    switch ($option) {
        '1' {
            Write-Host "Extracting encrypted private key...`n"
            $pfxFile = Read-Host "PFX File Path"
			$extract_priv_key = "& 'C:\Program Files\Git\usr\bin\openssl.exe' pkcs12 -nocerts -in $pfxFile -out extracted_key.key"
			Invoke-Expression $extract_priv_key
        }
        '2' {
            Write-Host "Generating certificate in .pem format...`n"
            $pfxFile = Read-Host "PFX File Path"
			$extract_cert_pem = "& 'C:\Program Files\Git\usr\bin\openssl.exe' pkcs12 -nokeys -in $pfxFile -out certpem.pem"
			Invoke-Expression $extract_cert_pem
        }
        '3' {
            Write-Host "Decrypting private key...`n"
			$decrypt_priv_key = "& 'C:\Program Files\Git\usr\bin\openssl.exe' rsa -in extracted_key.key -out decrypt_key.key"
			Invoke-Expression $decrypt_priv_key
        }
        '0' {
            Write-Host "Exiting..."
            break
        }
        Default {
            Write-Host "Invalid choice. Please select a valid option."
        }
    }

    return $option
}

do {
    $choice = Show-Menu
} while ($choice -ne '0')
