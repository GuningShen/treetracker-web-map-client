import * as pathResolver from './pathResolver';

describe('Test pathResolver', () => {
  describe('getPathWhenClickTree', () => {
    it('get path when click tree icon on page: /tokens/6c85c551-ed63-456f-ba0f-8d632897f560', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {},
        {
          pathname: '/tokens/6c85c551-ed63-456f-ba0f-8d632897f560',
        },
        {
          query: {},
        },
      );
      expect(result).toMatchObject({
        pathname: '/tokens/6c85c551-ed63-456f-ba0f-8d632897f560',
      });
    });

    it('click on /tokens/0c0c90cd-75cd-4961-9d27-e5392adc3067 from tokens/254fd088-b0aa-4eef-a3d9-b02c491ff9d3', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          token_id: '/tokens/0c0c90cd-75cd-4961-9d27-e5392adc3067',
        },
        {
          pathname: '/tokens/0c0c90cd-75cd-4961-9d27-e5392adc3067',
        },
        {
          query: {
            tokenid: 'tokens/254fd088-b0aa-4eef-a3d9-b02c491ff9d3',
          },
        },
      );
      expect(result).toMatchObject({
        pathname: '/tokens/0c0c90cd-75cd-4961-9d27-e5392adc3067',
      });
    });

    it('click on /organizations/178/trees/735592', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 706648,
        },
        {
          pathname: '/organizations/178/trees/735592',
        },
        {
          query: {},
        },
      );
      expect(result).toMatchObject({
        pathname: '/organizations/178/trees/706648',
      });
    });

    it('click on /trees/1017648', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 1017681,
        },
        {
          pathname: '/trees/1017648',
        },
        {
          query: {},
        },
      );
      expect(result).toMatchObject({
        pathname: '/trees/1017681',
      });
    });

    it('click on /wallets/0cdf4219-869a-41ce-953a-a8421d8353f7', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 14615,
          token_id: '3a53e2a6-ac17-43a5-a3aa-31fd04786cba',
        },
        {
          pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7',
        },
        {
          query: {},
        },
      );

      expect(result).toMatchObject({
        pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        query: {},
      });
    });

    it('click on /wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens?tree_id=14615', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 14616,
          token_id: '3a53e2a6-ac17-43a5-a3aa-31fd04786cba',
        },
        {
          pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        },
        {
          query: {
            tree_id: '14615',
          },
        },
      );

      expect(result).toMatchObject({
        pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        query: {
          tree_id: '14616',
        },
      });
    });

    it('click on /wallets/0cdf4219-869a-41ce-953a-a8421d8353f7', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 14615,
        },
        {
          pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7',
        },
        {
          query: {},
        },
      );

      expect(result).toMatchObject({
        pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        query: {
          tree_id: '14615',
        },
      });
    });

    it('click on /web-map-beta/demo/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens with base', async () => {
      const result = await pathResolver.getPathWhenClickTree(
        {
          id: 14615,
        },
        {
          pathname:
            '/web-map-beta/demo/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        },
        {
          query: {},
        },
        undefined,
        {
          base: '/web-map-beta/demo',
        },
      );

      expect(result).toMatchObject({
        pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7/tokens',
        query: {},
      });
    });
  });

  describe('updatePathWhenMapMoveEnd', () => {
    it('update path when ', () => {
      const result = pathResolver.updatePathWhenMapMoveEnd(
        {
          pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7',
        },
        {
          getCurrentBounds: () =>
            '37.44990348815919,-3.315482794386477,37.46535301208497,-3.307471024919109',
        },
        {
          query: {},
        },
      );
      expect(result).toBe(
        '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7?bounds=37.44990348815919,-3.315482794386477,37.46535301208497,-3.307471024919109',
      );
    });

    it('update path when /wallets/1f2a0862-66d1-4b42-8216-5a5cb9c6eca5/tokens?tree_id=14615', () => {
      const result = pathResolver.updatePathWhenMapMoveEnd(
        {
          pathname: '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7',
        },
        {
          getCurrentBounds: () =>
            '37.44990348815919,-3.315482794386477,37.46535301208497,-3.307471024919109',
        },
        {
          query: {
            tree_id: '14615',
          },
        },
      );
      expect(result).toBe(
        '/wallets/0cdf4219-869a-41ce-953a-a8421d8353f7?bounds=37.44990348815919,-3.315482794386477,37.46535301208497,-3.307471024919109&tree_id=14615',
      );
    });

    it('update path when /wallets/5f5939ae-91ce-49cd-81ba-7fdba81e250a/tokens?tree_id=5413738', () => {
      const result = pathResolver.updatePathWhenMapMoveEnd(
        {
          pathname: '/wallets/5f5939ae-91ce-49cd-81ba-7fdba81e250a/tokens',
        },
        {
          getCurrentBounds: () =>
            '46.38155221939087,-15.762146918354096,46.3908863067627,-15.74444839985392',
        },
        {
          query: {
            tree_id: '5413738',
          },
        },
      );
      expect(result).toBe(
        '/wallets/5f5939ae-91ce-49cd-81ba-7fdba81e250a/tokens?bounds=46.38155221939087,-15.762146918354096,46.3908863067627,-15.74444839985392&tree_id=5413738',
      );
    });
  });

  describe('getContext', () => {
    it('org context', () => {
      const result = pathResolver.getContext({
        asPath: '/organizations/178/trees/735592',
      });
      expect(result).toMatchObject({
        name: 'organizations',
        id: '178',
      });
    });

    it('org context with query', () => {
      const result = pathResolver.getContext({
        asPath:
          '/organizations/178/trees/735592?bounds=38.97374153137208,-5.511957953599709,38.98919105529786,-5.504397012212283',
      });
      expect(result).toMatchObject({
        name: 'organizations',
        id: '178',
      });
    });

    it('wallet context', () => {
      const result = pathResolver.getContext({
        asPath:
          '/wallets/1f2a0862-66d1-4b42-8216-5a5cb9c6eca5/tokens?tree_id=123',
      });
      expect(result).toMatchObject({
        name: 'wallets',
        id: '1f2a0862-66d1-4b42-8216-5a5cb9c6eca5',
      });
    });

    it('wallet context case2', () => {
      const result = pathResolver.getContext({
        asPath:
          '/wallets/1f2a0862-66d1-4b42-8216-5a5cb9c6eca5/tokens/3a53e2a6-ac17-43a5-a3aa-31fd04786cba',
      });
      expect(result).toMatchObject({
        name: 'wallets',
        id: '1f2a0862-66d1-4b42-8216-5a5cb9c6eca5',
      });
    });
  });

  describe('getBounds', () => {
    it('?bounds=-126.56250000000001,-56.365250136856076,126.56250000000001,56.17002298293205', () => {
      const bounds = pathResolver.getBounds({
        query: {
          bounds:
            '-126.56250000000001,-56.365250136856076,126.56250000000001,56.17002298293205',
        },
      });
      expect(bounds).toBe(
        '-126.56250000000001,-56.365250136856076,126.56250000000001,56.17002298293205',
      );
    });
  });
});
