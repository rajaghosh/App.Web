import { TestBed, inject } from '@angular/core/testing';

import { HackerService } from './hacker.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HackerData } from 'src/models/hacker-model';

describe('HackerService', () => {
  let service: HackerService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HackerService]
  }));


  it('Service -> getTotalDataSet is count of all records greater then 0', inject([HackerService], (hackerService: any) => {
    return hackerService.getTotalDataSet().subscribe((result: any) => {
      expect(result.length).toBeGreaterThan(0);
    });
  }));

  it('Service -> getTotalDataSet is count of all records less than or equals to 500', inject([HackerService], (hackerService: any) => {
    return hackerService.getTotalDataSet().subscribe((result: any) => {
      expect(result.length).toBeLessThanOrEqual(500);
    });
  }));

  it('Service -> getDataByPageSize checking if for id 39081948 value is received as expected', inject([HackerService], (hackerService: any) => {

    const expectedData: HackerData[] = [
      {
        id: 39081948,
        title: "C23: A Slightly Better C",
        type: "story",
        url: "https://lemire.me/blog/2024/01/21/c23-a-slightly-better-c/"
      },
    ];

    return hackerService.getDataByPageSize(1).subscribe((result: any) => {
      var dataList = result;
      var myData = dataList.filter((p: { id: number; }) => p.id == 39081948);
      
      expect(myData).toEqual(expectedData);
    });
  }));

});
