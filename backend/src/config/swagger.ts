export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Food App API',
    version: '1.0.0',
    description: 'Interactive REST API documentation for the Food App backend with full CRUD operations for restaurants.',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local Development Server',
    },
  ],
  tags: [
    { name: 'Health', description: 'System health check endpoints' },
    { name: 'Restaurants', description: 'Restaurant management and CRUD operations' },
  ],
  paths: {
    '/api/health': {
      get: {
        tags: ['Health'],
        summary: 'Check API and server health',
        responses: {
          200: {
            description: 'API is running healthy',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'ok' },
                    uptime: { type: 'number', example: 120.45 },
                    timestamp: { type: 'string', example: '2026-10-08T06:00:00.000Z' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/restaurants': {
      get: {
        tags: ['Restaurants'],
        summary: 'Get all restaurants',
        description: 'Retrieve a list of restaurants with optional query filters.',
        parameters: [
          {
            name: 'cuisine',
            in: 'query',
            description: 'Filter by cuisine (e.g., Italian, American, Indian)',
            required: false,
            schema: { type: 'string', example: 'Italian' },
          },
          {
            name: 'search',
            in: 'query',
            description: 'Search query matching name or cuisine',
            required: false,
            schema: { type: 'string', example: 'pasta' },
          },
          {
            name: 'minRating',
            in: 'query',
            description: 'Filter by minimum rating (0 to 5)',
            required: false,
            schema: { type: 'number', example: 4.0 },
          },
        ],
        responses: {
          200: {
            description: 'Restaurants fetched successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Restaurants fetched successfully' },
                    count: { type: 'integer', example: 3 },
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Restaurant' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Restaurants'],
        summary: 'Create a new restaurant',
        description: 'Add a new restaurant to the system.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateRestaurantDto' },
            },
          },
        },
        responses: {
          201: {
            description: 'Restaurant created successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Restaurant created successfully' },
                    data: { $ref: '#/components/schemas/Restaurant' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid input or missing required fields',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },
    '/api/restaurants/{id}': {
      get: {
        tags: ['Restaurants'],
        summary: 'Get restaurant by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Restaurant ID',
            schema: { type: 'integer', example: 1 },
          },
        ],
        responses: {
          200: {
            description: 'Restaurant fetched successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Restaurant fetched successfully' },
                    data: { $ref: '#/components/schemas/Restaurant' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid ID supplied',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Restaurant not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
      put: {
        tags: ['Restaurants'],
        summary: 'Update restaurant by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Restaurant ID to update',
            schema: { type: 'integer', example: 1 },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UpdateRestaurantDto' },
            },
          },
        },
        responses: {
          200: {
            description: 'Restaurant updated successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Restaurant updated successfully' },
                    data: { $ref: '#/components/schemas/Restaurant' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid ID or invalid update data',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Restaurant not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
      delete: {
        tags: ['Restaurants'],
        summary: 'Delete restaurant by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Restaurant ID to delete',
            schema: { type: 'integer', example: 1 },
          },
        ],
        responses: {
          200: {
            description: 'Restaurant deleted successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Restaurant deleted successfully' },
                    data: { $ref: '#/components/schemas/Restaurant' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid ID supplied',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Restaurant not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Restaurant: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'Pasta & Co' },
          cuisine: { type: 'string', example: 'Italian' },
          rating: { type: 'number', example: 4.6 },
          address: { type: 'string', example: '123 Via Roma, Downtown' },
          imageUrl: { type: 'string', example: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500' },
          createdAt: { type: 'string', format: 'date-time', example: '2026-10-08T06:00:00.000Z' },
        },
        required: ['id', 'name', 'cuisine'],
      },
      CreateRestaurantDto: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Sushi Zen' },
          cuisine: { type: 'string', example: 'Japanese' },
          rating: { type: 'number', minimum: 0, maximum: 5, example: 4.8 },
          address: { type: 'string', example: '77 Ocean Blvd' },
          imageUrl: { type: 'string', example: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500' },
        },
        required: ['name', 'cuisine'],
      },
      UpdateRestaurantDto: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Pasta & Co Express' },
          cuisine: { type: 'string', example: 'Italian' },
          rating: { type: 'number', minimum: 0, maximum: 5, example: 4.9 },
          address: { type: 'string', example: '125 Via Roma, Downtown' },
          imageUrl: { type: 'string', example: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500' },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Restaurant not found' },
        },
      },
    },
  },
};
