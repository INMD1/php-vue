<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeIgniter + Vite + Vue</title>
    <!-- Vite에서 빌드된 CSS 파일 -->
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css') ?>">
</head>
<body>
    <div id="app"></div>

    <!-- Vite에서 빌드된 Vue 자바스크립트 파일 -->
    <script type="module" src="<?= base_url('assets/js/main.js') ?>"></script>
</body>
</html>
