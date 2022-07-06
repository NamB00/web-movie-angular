import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  constructor() { }

  movieDetails = [
    {
      id: 1,
      movieName: 'The last post',
      movieImg: '../../../assets/img/movie-1.jpg',
      movieRel: 'Released 7 Mart, 2018',
    },
    {
      id: 2,
      movieName: 'The End of the World',
      movieImg: '../../../assets/img/movie-2.jpg',
      movieRel: 'Released 5 Mart, 2019'
    },
    {
      id: 3,
      movieName: 'Road to Hell',
      movieImg: '../../../assets/img/movie-3.jpg',
      movieRel: 'Released 7 Mart, 2010'
    },
    {
      id: 4,
      movieName: 'Terrible Secret 2',
      movieImg: '../../../assets/img/movie-4.jpg',
      movieRel: 'Released 7 Mart, 2013'
    },
    {
      id: 5,
      movieName: 'The last post 4',
      movieImg: '../../../assets/img/movie-5.jpg',
      movieRel: 'Released 7 Mart, 2011'
    },
    {
      id: 6,
      movieName: 'Spooky Clown 2',
      movieImg: '../../../assets/img/movie-6.jpg',
      movieRel: 'Released 7 Mart, 2017'
    },
    {
      id: 7,
      movieName: 'Crazy Guy ',
      movieImg: '../../../assets/img/movie-7.jpg',
      movieRel: 'Released 7 Mart, 2019'
    },
    {
      id: 8,
      movieName: 'Monkey Ninja',
      movieImg: '../../../assets/img/movie-8.jpg',
      movieRel: 'Released 7 Mart, 2022'
    },
    {
      id: 9,
      movieName: 'Bat Woman',
      movieImg: '../../../assets/img/movie-9.jpg',
      movieRel: 'Released 7 Mart, 2021'
    },
    {
      id: 12,
      movieName: 'Haunted house',
      movieImg: '../../../assets/img/movie-12.jpg',
      movieRel: 'Released 7 Mart, 2023'
    },
    {
      id: 13,
      movieName: 'War Thunder',
      movieImg: '../../../assets/img/movie-13.jpg',
      movieRel: 'Released 7 Mart, 2024'
    },
    {
      id: 14,
      movieName: 'Super Moon 3',
      movieImg: '../../../assets/img/movie-14.jpg',
      movieRel: 'Released 7 Mart, 2015'
    }
  ];

  movieShowTimes = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'The last post 4',
      movieImg: '../../../assets/img/movie-5.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Crazy Guy',
      movieImg: '../../../assets/img/movie-7.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 3,
      movieGen: 'ACTION, AVENTURE, HORIFIED',
      movieName: 'Spooky Clown 2',
      movieImg: '../../../assets/img/movie-6.jpg',
      movieTimes1: '09:30',
      movieTimes2: '14:30',
      movieTimes3: '15:30',
      movieTimes4: '20:50',
      movieTimesTotal: '90 MINS',
      movieDes: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
  ];

  movieShowTimes2 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'Monkey Ninja',
      movieImg: '../../../assets/img/movie-8.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Bat Woman',
      movieImg: '../../../assets/img/movie-9.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 3,
      movieGen: 'ACTION, AVENTURE, HORIFIED',
      movieName: 'Super Robot 2',
      movieImg: '../../../assets/img/movie-11.jpg',
      movieTimes1: '09:30',
      movieTimes2: '14:30',
      movieTimes3: '15:30',
      movieTimes4: '20:50',
      movieTimesTotal: '90 MINS',
      movieDes: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
  ];

  movieShowTimes3 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'Haunted house',
      movieImg: '../../../assets/img/movie-12.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'War Thunder',
      movieImg: '../../../assets/img/movie-13.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    }
  ];

  movieShowTimes4 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'The last post',
      movieImg: '../../../assets/img/movie-1.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'The End of the World',
      movieImg: '../../../assets/img/movie-2.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    }
  ];

  movieShowTimes5 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'Road to Hell',
      movieImg: '../../../assets/img/movie-3.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Terrible Secret 2',
      movieImg: '../../../assets/img/movie-4.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    }
  ];

  movieShowTimes6 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'War Thunder',
      movieImg: '../../../assets/img/movie-13.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Super Moon 3',
      movieImg: '../../../assets/img/movie-14.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '60 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 3,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'The last post 4',
      movieImg: '../../../assets/img/movie-5.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    }
  ];

  movieShowTimes7 = [
    {
      id: 1,
      movieGen: 'ACTION, AVENTURE, FANTASY',
      movieName: 'Bat Woman',
      movieImg: '../../../assets/img/movie-9.jpg',
      movieTimes1: '10:30',
      movieTimes2: '12:30',
      movieTimes3: '14:30',
      movieTimes4: '16:50',
      movieTimesTotal: '150 MINS',
      movieDes: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 2,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Super Moon 3',
      movieImg: '../../../assets/img/movie-14.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '100 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    },
    {
      id: 3,
      movieGen: 'FUN, AVENTURE, FANTASY',
      movieName: 'Road to Hell',
      movieImg: '../../../assets/img/movie-3.jpg',
      movieTimes1: '12:30',
      movieTimes2: '16:30',
      movieTimes3: '18:30',
      movieTimes4: '22:50',
      movieTimesTotal: '90 MINS',
      movieDes: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur ipsa error id tempora nesciunt soluta minima libero ipsum nobis'
    }
  ];
}
