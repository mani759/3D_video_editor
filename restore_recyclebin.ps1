$projectKeywords = @('3d_video_editor','EDITOR PORTFOLIO')
$mediaExts = @('.jpg','.jpeg','.png','.gif','.webp','.mp4','.mov')
$shell = New-Object -ComObject Shell.Application
$recycle = $shell.Namespace('shell:RecycleBinFolder')
$items = @($recycle.Items())
if ($items.Count -eq 0) { Write-Output 'Recycle Bin empty'; exit 0 }
$restored = @()

foreach ($item in $items) {
  $orig = ''
  for ($i=0; $i -lt 60; $i++) {
    $d = $recycle.GetDetailsOf($item,$i)
    if ($d -and $d -match ':[\\\\]') { $orig = $d; break }
  }
  if (-not $orig) { $orig = $recycle.GetDetailsOf($item,1) }

  $shouldRestore = $false

  foreach ($k in $projectKeywords) {
    if ($orig -and $orig -like "*$k*") { $shouldRestore = $true; break }
  }

  if (-not $shouldRestore) {
    $nameLower = $item.Name.ToLower()
    foreach ($ext in $mediaExts) {
      if ($nameLower.EndsWith($ext)) { $shouldRestore = $true; break }
    }
    if (-not $shouldRestore -and $nameLower -match '^ezgif-frame-') { $shouldRestore = $true }
  }

  if ($shouldRestore) {
    try {
      $item.InvokeVerb('Restore') | Out-Null
      $restored += @{Name=$item.Name; Original=$orig}
      Write-Output "Restored: $($item.Name) -> $orig"
    } catch {
      Write-Output "Failed: $($item.Name) -> $orig : $_"
    }
  }
}

if ($restored.Count -eq 0) { Write-Output 'No matching items found in Recycle Bin.' } else { Write-Output "Total restored: $($restored.Count)" }
