/// <reference types="Cypress" />
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsContainer from './ResultsContainer';

describe('ResultsContainer', () => {
  const mockFiltersData = {
    isLoading: false,
    data: [
      {
        filterId: 'star_ratings',
        title: 'Star ratings',
        filters: [
          {
            id: '5_star_rating',
            title: '5 Star',
          },
          {
            id: '4_star_rating',
            title: '4 Star',
          },
          {
            id: '3_star_rating',
            title: '3 Star',
          },
        ],
      },
      {
        filterId: 'propety_type',
        title: 'Property type',
        filters: [
          {
            id: 'prop_type_hotel',
            title: 'Hotel',
          },
          {
            id: 'prop_type_apartment',
            title: 'Apartment',
          },
          {
            id: 'prop_type_villa',
            title: 'Villa',
          },
        ],
      },
    ],
  };

  const mockHotelsResults = {
    isLoading: false,
    data: [
      {
        hotelCode: 71222,
        images: [
          {
            imageUrl: '/images/hotels/481481762/481481762.jpg',
            accessibleText: 'The Veil Hotel',
          },
          {
            imageUrl: '/images/hotels/481481762/525626081.jpg',
            accessibleText: 'The Veil Hotel',
          },
          {
            imageUrl: '/images/hotels/481481762/525626095.jpg',
            accessibleText: 'The Veil Hotel',
          },
          {
            imageUrl: '/images/hotels/481481762/525626104.jpg',
            accessibleText: 'The Veil Hotel',
          },
          {
            imageUrl: '/images/hotels/481481762/525626212.jpg',
            accessibleText: 'The Veil Hotel',
          },
        ],
        title: 'The Veil Hotel',
        subtitle: 'Қонақ үй Нұрсұлтан Назарбаев халықаралық әуежайынан 16 км қашықтықта орналасқан',
        benefits: [
          'Тегін бас тарту',
          'Алдын ала төлем талап етілмейді – төлем сайтта жүзеге асырылады.',
        ],
        price: '18900',
        ratings: '5',
        city: 'Теңге',
        reviews: {
          data: [
            {
              reviewerName: 'Рахул Пател',
              rating: 5,
              review:
                'Қонақ үй өте жақсы және қызметкерлер өте мейірімді. Тамағы да өте жақсы.',
              date: 'Тұру күні: 01.01.2021 ж',
            },
            {
              reviewerName: 'Сара Джонсон',
              rating: 4,
              review:
                'Тамаша қызметі бар тамаша қонақүй. Бөлмелер кең және таза. Қызметкерлер жайлы тұруды қамтамасыз ету үшін жоғары және одан да көп болды. Өте ұсынылады!',
              date: 'Тұру күні: 2021-02-15',
            },
            {
              reviewerName: 'Джон Смит',
              rating: 3,
              review: 'Орташа қонақүй. Қызметкерлер мұқият болуы мүмкін.',
              date: 'Тұру күні: 2021-03-10',
            },
            {
              reviewerName: 'Эмили Дэвис',
              rating: 5,
              review: 'Керемет тәжірибе! Қонақ үй менің күткенімнен асып түсті.',
              date: 'Тұру күні: 2021-04-20',
            },
            {
              reviewerName: 'Дэвид Уилсон',
              rating: 1,
              review:
                'Қорқынышты тәжірибе. Қонақ үй лас болды, ал қызметкерлер дөрекі болды.',
              date: 'Тұру күні: 2021-05-05',
            },
            {
              reviewerName: 'Джессика Томпсон',
              rating: 4,
              review:
                'Керемет орналасуы бар тамаша қонақ үй. Қызметкерлер мейірімді және пайдалы.',
              date: 'Тұру күні: 2021-06-12',
            },
            {
              reviewerName: 'Майкл Браун',
              rating: 2,
              review:
                'Көңілсіз қалу. Бөлме таза емес және қызмет көрсету баяу болды.',
              date: 'Тұру күні: 2021-07-20',
            },
            {
              reviewerName: 'София Ли',
              rating: 5,
              review:
                'Ерекше қызмет көрсету және әдемі бөлмелер. Қызметкерлер керемет мейірімді және мұқият.Көрсетілген ыңғайлылықтар жоғары деңгейде болды. Жалпы алғанда, шынымен ұмытылмас тәжірибе!',
              date: 'Тұру күні: 2021-08-05',
            },
            {
              reviewerName: 'Дэниел Джонсон',
              rating: 3,
              review:
                'Орташа жабдықтары бар лайықты қонақүй. Қызметкерлер сыпайы және пайдалы болды. Дегенмен, бөлме таза болуы мүмкін еді. Бұл жалпы жақсы демалыс болды.',
              date: 'Тұру күні: 2021-09-10',
            },
            {
              reviewerName: 'Оливия Уилсон',
              rating: 4,
              review:
                'Қонақүйде болғаным ұнады. Бөлме ыңғайлы және қызметкерлер мейірімді болды.',
              date: 'Тұру күні: 2021-10-15',
            },
            {
              reviewerName: 'Этан Дэвис',
              rating: 4,
              review:
                'Керемет ыңғайлылығы бар керемет қонақ үй. Қызметкерлер мұқият және пайдалы болды.',
              date: 'Тұру күні: 2021-11-20',
            },
            {
              reviewerName: 'Ава Смит',
              rating: 2,
              review:
                'Қонақ үйге көңілі толмады. Бөлме шағын және қызмет көрсету нашар болды.',
              date: 'Тұру күні: 2021-12-05',
            },
            {
              reviewerName: 'Mia Johnson',
              rating: 4,
              review:
                'Had a pleasant stay at the hotel. The location was convenient and the staff was friendly.',
              date: 'Тұру күні: 2022-01-10',
            },
            {
              reviewerName: 'Миа Джонсон',
              rating: 3,
              review:
                'Қолайлы жабдықтары бар орташа қонақүй. Қызметкерлер көмектесті.',
              date: 'Тұру күні: 2022-02-15',
            },
            {
              reviewerName: 'Лиам Дэвис',
              rating: 4,
              review:
                'Жоғары деңгейдегі қызметі бар тамаша қонақ үй. Бөлмелер сәнді және жайлы болды.',
              date: 'Тұру күні: 2022-03-20',
            },
          ],
        },
      },
      {
        hotelCode: 71223,
        images: [
          {
            imageUrl: '/images/hotels/465660377/465660377.jpg',
            accessibleText: 'Марриотт Пунаның ауласы',
          },
        ],
        title: 'Марриотт Пуна Хинджевадидің ауласы',
        subtitle: 'Раджив Ганди инфотех паркінен 500 метр',
        benefits: [
          'Тегін бас тарту',
          'Алдын ала төлем талап етілмейді - мүлікте төлеңіз',
          'Тегін wifi',
          'Тегін түскі ас',
        ],
        price: '25300',
        ratings: '4',
        city: 'Пунe',
      },
      {
        hotelCode: 71224,
        images: [
          {
            imageUrl: '/images/hotels/469186143/469186143.jpg',
            accessibleText: 'Вестин Пуна Корегаон саябағы',
          },
        ],
        title: 'Вестин Пуна Корегаон саябағы',
        subtitle: 'орталықтан 5,4 км',
        benefits: [
          'Тегін бас тарту',
          'Алдын ала төлем талап етілмейді - мүлікте төлеңіз',
          'Тегін wifi',
        ],
        price: '11300',
        ratings: '5',
        city: 'Пуне',
      },
      {
        hotelCode: 71225,
        images: [
          {
            imageUrl: '/images/hotels/252004905/252004905.jpg',
            accessibleText: 'The St. Regis Astana',
          },
        ],
        title: 'The St. Regis Astana',
        subtitle: 'Weikfield IT City Infopark | орталықтан 7,1 км',
        benefits: [
          'Жануарларға рұқсат етіледі',
          'Кешкі ас + Түскі ас кіреді',
          'Тегін wifi',
          'Әуежайдан тегін такси',
        ],
        price: '14599',
        ratings: '3',
        city: 'Пуне',
      },
      {
        hotelCode: 71226,
        images: [
          {
            imageUrl: '/images/hotels/54360345/54360345.jpg',
            accessibleText: 'Виванта Пуна',
          },
        ],
        title: 'Виванта Пуна',
        subtitle: 'Xion кешені, | орталықтан 14,2 км',
        benefits: [
          'Жануарларға рұқсат етіледі',
          'Тегіе wifi',
          'Тегін бас тарту',
          'Алдын ала төлем талап етілмейді - мүлікте төлеңіз',
        ],
        price: '9799',
        ratings: '4.3',
        city: 'Пуне',
      },
    ],
  };

  const selectedFiltersState = mockFiltersData.data.map((filterGroup) => ({
    ...filterGroup,
    filters: filterGroup.filters.map((filter) => ({
      ...filter,
      isSelected: false,
    })),
  }));

  beforeEach(() => {
    // cy.intercept() to mock API responses
  });

  it('renders hotel view cards when not loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={false}
          filtersData={mockFiltersData}
        />
      </BrowserRouter>
    );

    cy.get('[data-testid=hotel-view-card]').should('have.length', 5);
  });

  it('renders hotel view card skeletons when loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={{ ...mockHotelsResults, isLoading: true }}
          enableFilters={false}
          filtersData={mockFiltersData}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=hotel-view-card-skeleton]').should('have.length', 5);
  });

  it('renders vertical filters when filters are enabled and not loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={{ ...mockFiltersData, isLoading: false }}
          selectedFiltersState={selectedFiltersState}
          onFiltersUpdate={() => {}}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=vertical-filters]').should('exist');
  });

  it('renders vertical filters skeleton when filters are enabled and loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={{ ...mockFiltersData, isLoading: true }}
          selectedFiltersState={[]}
          onFiltersUpdate={() => {}}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=vertical-filters-skeleton]').should('exist');
  });

  it('calls onFiltersUpdate with correct arguments', () => {
    const onFiltersUpdateSpy = cy.spy().as('onFiltersUpdateSpy');

    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={mockFiltersData}
          onFiltersUpdate={onFiltersUpdateSpy}
          selectedFiltersState={selectedFiltersState}
        />
      </BrowserRouter>
    );

    cy.get('[data-testid=vertical-filters__toggle-menu]').click();

    cy.get('[data-testid=5_star_rating]').click();

    cy.get('@onFiltersUpdateSpy').should('have.been.calledWith', {
      filterId: 'star_ratings',
      id: '5_star_rating',
    });

    cy.get('[data-testid=4_star_rating]').click();

    cy.get('@onFiltersUpdateSpy').should('have.been.calledWith', {
      filterId: 'star_ratings',
      id: '4_star_rating',
    });
  });
});
