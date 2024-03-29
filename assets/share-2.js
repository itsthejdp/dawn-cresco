document.addEventListener('DOMContentLoaded', function() {
    var productUrl = window.location.href;
    document.getElementById('productUrl').value = productUrl;
  
    document.getElementById('facebookShare').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    document.getElementById('pinterestShare').href = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}`;
    document.getElementById('twitterShare').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}`;
  });
  
  function copyProductUrl() {
    var copyText = document.getElementById('productUrl');
    copyText.select();
    document.execCommand('copy');
  }
  
  function toggleSocialSharingModal() {
    var modal = document.getElementById('socialSharingModal');
    modal.classList.toggle('hidden');
  }
  