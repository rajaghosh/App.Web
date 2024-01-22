import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HackerData, TotalDataHeader } from 'src/models/hacker-model';
import { HackerService } from 'src/services/hacker.service';

@Component({
  selector: 'app-hacker-display',
  templateUrl: './hacker-display.component.html',
  styleUrls: ['./hacker-display.component.css'],
})
export class HackerDisplayComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'type', 'url'];
  dataSource!: MatTableDataSource<HackerData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Page level variable
  checkCount: number = 0;
  indexHolder: number = 0;
  indexArr: number[] = [];
  pageSize: number = 200;
  showloader: boolean = false;
  rangeOffset: number = -1;
  isDataLoaded: boolean = false;
  originalHackerData: HackerData[] = [];
  currentDataCount: number = 0;
  title = 'R System Hacker Data Information Page';

  constructor(private hackerService: HackerService) {

    this.showloader = true;
    this.hackerService.getTotalDataSet().subscribe((totalEvent: TotalDataHeader[]) => {

      // console.log(JSON.stringify(totalEvent));
      this.checkCount = totalEvent.length;
      var tempCheck = (this.checkCount % this.pageSize) > 0 ? 1 : 0;

      this.indexHolder = Math.floor(this.checkCount / this.pageSize) + tempCheck;

      //Create index list
      for (let i = 0; i < this.indexHolder; i++) {
        this.indexArr.push(i);
      }
      this.showloader = false;
    });

  }

  ngAfterViewInit(): void {

  }

  applyFilter(event: Event) {

    // console.log(this.dataSource);

    const filterValue = (event.target as HTMLInputElement).value;

    let currentData = this.originalHackerData;
    let newFilteredData = currentData.filter(p => p.title.toLowerCase().includes(filterValue.toLowerCase()));
    this.dataSource.data = newFilteredData;

    //update data count to show on the html page
    this.currentDataCount = newFilteredData.length;

    // console.log(this.dataSource);

    if (this.dataSource.paginator) {
      //reset to first page for pagination
      this.dataSource.paginator.firstPage();
    }
  }

  fillWithData(offset: number) {
    this.showloader = true;
    this.hackerService.getDataByPageSize(offset).subscribe((dataStream) => {

      // console.log(dataStream);

      this.posts = dataStream;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.showloader = false;

      this.originalHackerData = this.dataSource.data;

      //update data count to show on the html page
      this.currentDataCount = this.dataSource.data.length;

      if (this.posts.length > 0)
        this.isDataLoaded = true;

      this.rangeOffset = offset;
    });
  }

  openUrl(urlLink: string) {
    window.open(urlLink, '_blank');
  }
}


