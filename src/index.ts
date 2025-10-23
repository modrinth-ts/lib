type Type =
    | 'project_type'
    | 'categories'
    | 'versions'
    | 'client_side'
    | 'server_side'
    | 'open_source'
    | 'title'
    | 'author'
    | 'follows'
    | 'project_id'
    | 'license'
    | 'downloads'
    | 'color'
    | 'created_timestamp'
    | 'modified_timestamp'
    | 'date_created'
    | 'date_modified';

const operands = [':', '=', '!=', '>=', '>', '<=', '<'] as const;
type Operand = (typeof operands)[number];

type Facet = `${Type}${Operand}${string}`;

/**
 * Generates the facets query parameter for searching projects.
 *
 * Passing more than one facet of the same type will group them with an OR operation,
 * while different types will be grouped with an AND operation.
 *
 * @param facets The facets to include in the search.
 * @returns The formatted facets string.
 *
 * @see https://docs.modrinth.com/api/operations/searchprojects/#query-parameters
 */
export const facets = (...facets: Facet[]) => {
    const operandsRegex = new RegExp(operands.map((op) => `\\${op}`).join('|'));
    const facetMap = {} as Record<Type, Facet[]>;

    facets.forEach((facet) => {
        const type = facet.split(operandsRegex)[0] as Type;
        if (!facetMap[type]) facetMap[type] = [];
        facetMap[type].push(facet);
    });

    const groupedFacets = Object.values(facetMap).map(
        (facetList) => `["${facetList.join('","')}"]`,
    );
    return `[${groupedFacets.join(',')}]`;
};

export * from './generated';
