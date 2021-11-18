import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should List All People', () => {
    const mockData = { name: 'Daniel', date: '2021-11-17T23:58:09.680Z' }
    service.getAllPeople().subscribe(peopleArray => {
      expect(peopleArray[0].name).toEqual('Daniel');
      expect(peopleArray[0].date.toISOString()).toEqual('2021-11-17T23:58:09.680Z');
    })
    const req = httpTestingController.expectOne('/person');
    expect(req.request.method).toEqual('GET');
    req.flush([mockData]);
  });

});
