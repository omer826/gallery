console.log('Starting up');
'use strict'

function initPage() {
    createprojects();
    var projects = getPorjects();
    renderProjects(projects);
}

function renderProjects(projs) {

    var elGridRow = $('.portfolios');
    var strHtml = '';
    projs.forEach(function (proj) {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
       <a class="portfolio-link" data-id=${proj.id} data-toggle="modal" onclick="onOpenModal(this)" href="#portfolioModal" >
        <div class="portfolio-hover" >
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${proj.url}" alt="img/load.png">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.labels}</p>
      </div>
      </div>`
    });
    elGridRow.html(strHtml);
}

function onOpenModal(proj) {
    var projId = $(proj).attr('data-id');
    if (projId !== '') {
        var proj = getPorj(projId);
        renderModal(proj);
    }
}

function renderModal(proj) {
    var elModal = $('.modal-body');
    var strHtml = '';
    // var elLink = $('.link-proj');
    if (elModal) {
        strHtml = `<h2>${proj.name}</h2>
            <p class="item-intro text-muted">${proj.title}</p>
            <img class="img-fluid d-block mx-auto" src="${proj.url}" alt="">
            <p>${proj.desc}</p>
            <ul class="list-inline">
              <li>Publish Date: ${proj.publishedAt}</li>
              <li>Client: Coding Academy</li>
              <li>Aboute: ${proj.labels}</li>
            </ul>`;
            if (proj.isProjhHere){
                strHtml += `<button class="btn btn-primary" type="button">
                    <a class="link-proj" href=projs/${proj.id}/index.html target="_blank">
                  go to Project
                  </a>
                </button>`
            }
        elModal.html(strHtml)
    }

}

function onclickSubmit() {
    var userEmail = $('.input-email').val();
    var msgSubject = $('.input-subject').val();
    var msgBody = $('.input-body').val();
    var isEmail = validateEmail(userEmail)
    if (isEmail) {
        var href = `https://mail.google.com/mail/?view=cm&fs=1&to=omer3026@gmail.com&su=${msgSubject}&body=${msgBody}`;
        window.open(href);
    } else {
        $('.input-email').val('Email Not found');
    }
}




